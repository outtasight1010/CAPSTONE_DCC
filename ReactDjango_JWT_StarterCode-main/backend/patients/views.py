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

@api_view(['POST'])
@permission_classes([AllowAny])
def add_patient_name(request):
    first_name = request.data.get('first_name')
    last_name = request.data.get('last_name')
    
    if first_name and last_name:
        # You can add logic here to save the patient name to your database
        
        return Response({"message": "Patient name added successfully."}, status=status.HTTP_201_CREATED)
    else:
        return Response({"message": "First name and last name are required."}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])  
def get_patient_details(request, patientId):
    try:
        patient = Patient.objects.get(id=patientId)
        serializer = PatientSerializer(patient)
        return Response(serializer.data)
    except Patient.DoesNotExist:
        return Response({"detail": "Patient details not found."}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])  
def get_all_patients(request):
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)
