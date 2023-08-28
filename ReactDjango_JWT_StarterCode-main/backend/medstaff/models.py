from django.db import models
from authentication.models import User

class MedicalStaff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    
