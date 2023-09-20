from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import MedicalStaff
from .serializers import MedicalStaffSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def staff_on_duty(request):
    staff_on_duty = MedicalStaff.objects.all()  
    serializer = MedicalStaffSerializer(staff_on_duty, many=True)
    return Response(serializer.data)

