from django import forms
from .models import Member

class MemberForm(forms.ModelForm):

    class Meta:
        model = Member
        fields = ['fname', 'lname', 'email', 'phone', 'age', 'height', 'weight',
                 'commit', 'goal', 'stuck', 'start', 'signature', 'signup', 'date']