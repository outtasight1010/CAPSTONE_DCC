from django.urls import path
from . import views  # Import your patient views here

urlpatterns = [
    path('register/', views.register_patient, name='register_patient'),
    path('details/', views.get_patient_details, name='get_patient_details'),
    # Add more URLs for other patient views if needed
]
