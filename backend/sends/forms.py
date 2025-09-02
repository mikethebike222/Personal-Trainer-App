from django import forms
from .models import Member

class MemberForm(forms.ModelForm):

    class Meta:
        model = Member
        fields = ['fname', 'lname', 'email', 'phone', 'age', 'height', 'weight',
                 'commit', 'hasJob', 'monthlyIncome', 'whatsapp', 'goal', 
                 'stuck', 'start', 'signature', 'signup', 'date']