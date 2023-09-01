from django.urls import path
from .views import register_patient, get_patient_details, get_all_patients

urlpatterns = [
    path('register/', register_patient, name='register-patient'),
    path('details/', get_patient_details, name='patient-details'),
    path('all/', get_all_patients, name='all-patients'),  
]
