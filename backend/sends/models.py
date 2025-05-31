from django.db import models

# Create your models here.
class Member(models.Model):
    fname = models.CharField(max_length=50, default="None")
    lname = models.CharField(max_length=100, default="None")
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=20, default="0")
    age = models.IntegerField(default=20)
    height = models.CharField(max_length=5, default="None")
    weight = models.IntegerField(default=0)
    commit = models.CharField(max_length=3, default='Yes')
    goal = models.IntegerField(default=0)
    stuck = models.CharField(max_length=250, default="None")
    start = models.CharField(max_length=25, default="Immediately")
    signature = models.CharField(max_length=150, default="None")

    def __str__(self):
        return self.fname + ' ' + self.lname
    
