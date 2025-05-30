from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
@csrf_exempt
def index(request):
    if request.method == "POST":

        return HttpResponse("Post BA")

    else:
        return HttpResponse("not post")
