from rest_framework import serializers
from .models import MedicalStaff, Patient

class MedicalStaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalStaff
        fields = '__all__'