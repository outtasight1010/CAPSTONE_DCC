from django.urls import path
from . import views

urlpatterns = [
    # Other URLs for medical staff, if needed
    path('add_patient/', views.add_patient, name='add_patient'),  # Endpoint to add patients to the queue
]

