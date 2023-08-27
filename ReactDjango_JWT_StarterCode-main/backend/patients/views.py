from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Patient
from .serializers import PatientSerializer

@api_view(['POST'])
@permission_classes([AllowAny])
def register_patient(request):
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_patient_details(request):
    patient = Patient.objects.get(user=request.user)
    serializer = PatientSerializer(patient)
    return Response(serializer.data)
