from django.urls import path
from .views import register_patient, get_patient_details, get_all_patients, add_patient_name

urlpatterns = [
    path('register/', register_patient, name='register-patient'),
    path('details/<int:patientId>/', get_patient_details, name='patient-details'),
    path('add-patient-name/', add_patient_name, name='add-patient-name'),
    path('all/', get_all_patients, name='all-patients'),  
]
