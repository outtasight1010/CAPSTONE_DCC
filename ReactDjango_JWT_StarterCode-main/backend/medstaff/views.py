from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import MedicalStaff
from .serializers import MedicalStaffSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_medical_staff(request):
    medical_staff = MedicalStaff.objects.all()
    serializer = MedicalStaffSerializer(medical_staff, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def staff_on_duty(request):
    staff = MedicalStaff.objects.all().values('full_name', 'title', 'job', 'shift')
    return Response(staff)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_medical_staff(request):
    serializer = MedicalStaffSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_medical_staff(request, pk):
    try:
        medical_staff = MedicalStaff.objects.get(pk=pk)
    except MedicalStaff.DoesNotExist:
        return Response({"message": "Medical staff not found."}, status=status.HTTP_404_NOT_FOUND)

    serializer = MedicalStaffSerializer(medical_staff, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_medical_staff(request, pk):
    try:
        medical_staff = MedicalStaff.objects.get(pk=pk)
    except MedicalStaff.DoesNotExist:
        return Response({"message": "Medical staff not found."}, status=status.HTTP_404_NOT_FOUND)

    medical_staff.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
