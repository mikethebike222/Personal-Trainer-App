from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from .forms import MemberForm
import requests
import os


# Method thats recieves a post of client data in json format and then 
# creates a MemberForm with that data. Makes sure the instance is valid and
# saves to the postgresql database.
# Returns: Response to the server that posted the data with appropriate info
@csrf_exempt
def receive_data(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            print("Received data:", data) 
            
            # Create form with the data
            form = MemberForm(data)
            
            if form.is_valid():

                # Save the form
                member = form.save()

                try:
                    AZURE_FUNC_KEY = os.environ.get("AZURE_FUNC_KEY")
                    resp = requests.post(AZURE_FUNC_KEY, json=data, timeout=10)

                    print("Azure Function response:", resp.status_code, resp.text)
                except Exception as e:
                    print("Failed to call Azure Function:", e)
                
                
                return JsonResponse({
                    'message': 'Data received and saved successfully',
                    'data': data,
                    'member_id': member.id
                })
            
            # Else There was an error with the form
            else:
                print("Form errors:", form.errors) 
                return JsonResponse({
                    'message': 'Form validation failed',
                    'errors': form.errors,
                    'data': data
                }, status=400)
        except json.JSONDecodeError as e:
            print("JSON decode error:", str(e))
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            print("Unexpected error:", str(e))
            return JsonResponse({'error': 'Server error'}, status=500)
    else:
        # Not a post so 405 status
        return HttpResponse("Only Supports Post Requests", status=405)
    
def home(request):
    return HttpResponse("Backend is running")