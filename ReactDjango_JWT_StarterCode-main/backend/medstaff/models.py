from django.db import models
from authentication.models import User

from django.db import models

class MedicalStaff(models.Model):
    full_name = models.CharField(max_length=255)
    job = models.CharField(max_length=255, default="Other")
    title = models.CharField(max_length=255,default="Other")
    shift = models.CharField(max_length=255,default="Other")

    def __str__(self):
        return self.full_name


