from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from .forms import MemberForm
import requests
import os
import threading
import traceback

@csrf_exempt
def receive_data(request):
    if request.method == "POST":
        error_details = {}  # Collect error details for response
        
        try:
            # Parse JSON
            try:
                data = json.loads(request.body)
                error_details['json_parsing'] = 'success'
                error_details['received_data'] = data
            except json.JSONDecodeError as e:
                return JsonResponse({
                    'error': 'Invalid JSON',
                    'stage': 'JSON Parsing',
                    'details': str(e),
                    'position': f'Line {e.lineno}, Column {e.colno}' if hasattr(e, 'lineno') else 'Unknown',
                    'received_body': request.body.decode('utf-8')[:500] if request.body else None
                }, status=400)
            
            # Convert age if needed
            if 'age' in data and isinstance(data['age'], str):
                try:
                    data['age'] = int(data['age'])
                    error_details['age_conversion'] = f'Converted "{data["age"]}" to integer'
                except ValueError as ve:
                    error_details['age_conversion'] = f'Failed: {str(ve)}'
            
            # Create and validate form
            form = MemberForm(data)
            error_details['form_created'] = True
            
            if form.is_valid():
                error_details['form_validation'] = 'passed'
                
                # Try to save
                try:
                    member = form.save()
                    error_details['database_save'] = 'success'
                    error_details['member_id'] = member.id
                    
                except Exception as save_error:
                    return JsonResponse({
                        'error': 'Database save failed',
                        'stage': 'Database Operation',
                        'details': str(save_error),
                        'traceback': traceback.format_exc(),
                        'form_data': form.cleaned_data,
                        'debug_info': error_details
                    }, status=500)

                # Azure function call (in thread)
                def call_function():
                    try:
                        AZURE_FUNC_KEY = os.environ.get("AZURE_FUNC_KEY")
                        if AZURE_FUNC_KEY:
                            requests.post(AZURE_FUNC_KEY, json=data, timeout=10)
                    except Exception as e:
                        # Thread errors won't affect the response
                        pass

                threading.Thread(target=call_function).start()
                
                return JsonResponse({
                    "status": "success",
                    "member_id": member.id,
                    "message": "Data saved successfully",
                    "debug_info": error_details
                })

            else:
                # Form validation failed
                error_dict = {}
                for field, errors in form.errors.items():
                    error_dict[field] = [str(error) for error in errors]
                
                return JsonResponse({
                    'error': 'Form validation failed',
                    'stage': 'Form Validation',
                    'validation_errors': error_dict,
                    'received_data': data,
                    'form_fields': list(form.fields.keys()),
                    'model_fields': [f.name for f in Member._meta.get_fields()],
                    'missing_fields': [f for f in form.fields.keys() if f not in data],
                    'extra_fields': [f for f in data.keys() if f not in form.fields.keys()],
                    'debug_info': error_details
                }, status=400)
                
        except Exception as e:
            # Catch-all for unexpected errors
            return JsonResponse({
                'error': 'Unexpected server error',
                'stage': 'Unknown',
                'exception_type': type(e).__name__,
                'details': str(e),
                'traceback': traceback.format_exc(),
                'debug_info': error_details,
                'request_method': request.method,
                'content_type': request.content_type,
                'body_preview': request.body.decode('utf-8')[:500] if request.body else None
            }, status=500)
    else:
        return JsonResponse({
            'error': 'Method not allowed',
            'allowed_methods': ['POST'],
            'received_method': request.method
        }, status=405)

# Return a response to indicate the backend is running
def home(request):
    return HttpResponse("Backend is running")