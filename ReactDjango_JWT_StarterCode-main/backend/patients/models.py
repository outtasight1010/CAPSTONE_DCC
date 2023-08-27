from django.db import models
from authentication.models import User

class Patient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    contact_number = models.CharField(max_length=15)
    medical_history = models.TextField()
    joined_queue = models.BooleanField(default=False)
    queue_position = models.PositiveIntegerField(null=True, blank=True)
    estimated_wait_time = models.DurationField(null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


# Create your models here.
