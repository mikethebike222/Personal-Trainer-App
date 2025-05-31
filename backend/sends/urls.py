from django.urls import path
from . import views


urlpatterns = [
    path("", views.recieve_data, name="recieve_data"),
]
