from rest_framework import serializers
from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = [
            'id', 'first_name', 'last_name', 'contact_number', 
            'medical_history', 'joined_queue', 'queue_position', 
            'estimated_wait_time', 'user', 'pain_level'
        ]


class AddPatientFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['first_name', 'last_name']
