from django.urls import path
from . import views

# support root and /submit paths
urlpatterns = [
    path("", views.home, name="home"),
    path("submit/", views.receive_data, name="receive_data")
]
