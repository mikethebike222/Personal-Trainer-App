from django.db import models
from django.utils import timezone

# Create your models here.
class Member(models.Model): 

    # All the fields for the DB
    fname = models.CharField(max_length=50, default="None")
    lname = models.CharField(max_length=100, default="None")
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=50, default="None")
    age = models.IntegerField(default=20)
    height = models.CharField(max_length=100, default="None")
    weight = models.CharField(max_length=100, default="None")
    commit = models.CharField(max_length=3, default='Yes')
    goal = models.CharField(max_length=100, default="None")
    stuck = models.CharField(max_length=250, default="", blank=True, null=True)
    start = models.CharField(max_length=25, default="Immediately")
    signature = models.CharField(max_length=150, default="None")
    signup = models.BooleanField(default = False)
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.fname + ' ' + self.lname
    
