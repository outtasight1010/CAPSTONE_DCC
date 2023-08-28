from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import MedicalStaff, Patient
from .serializers import MedicalStaffSerializer, PatientSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def patients(request):
    if request.method == 'GET':
        patients = Patient.objects.filter(staff=request.user.medicalstaff)  # Only show patients registered by the medical staff
        serializer = PatientSerializer(patients, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = MedicalStaffSerializer(request.user.medicalstaff)
        data = request.data.copy()
        data['staff'] = serializer.data['id']
        patient_serializer = PatientSerializer(data=data)
        if patient_serializer.is_valid():
            patient_serializer.save()
            return Response(patient_serializer.data, status=status.HTTP_201_CREATED)
        return Response(patient_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
