from django.db import models
from authentication.models import User
from patients.models import Patient

class Queue(models.Model):
    name = models.CharField(max_length=100, unique=True)
    patients = models.ManyToManyField(Patient, through='QueueEntry')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class QueueEntry(models.Model):
    queue = models.ForeignKey(Queue, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    joined_at = models.DateTimeField(auto_now_add=True)
    position = models.PositiveIntegerField()

    class Meta:
        ordering = ['position']

    def __str__(self):
        return f"{self.patient} - Position: {self.position}"


# Create your models here.
