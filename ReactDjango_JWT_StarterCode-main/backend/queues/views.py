from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Queue, QueueEntry
from .serializers import QueueSerializer, QueueEntrySerializer
from patients.models import Patient

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_active_queue(request):
    active_queue = Queue.objects.filter(is_active=True)
    if active_queue.exists():
        serializer = QueueSerializer(active_queue, many=True)
        return Response(serializer.data)
    else:
        print("No active queues found.")
        return Response({"message": "No active queues found."}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_queue_patients(request):
    active_queue = Queue.objects.filter(is_active=True)
    if not active_queue:
        return Response({"message": "No active queue found."}, status=status.HTTP_404_NOT_FOUND)
    queue_entries = QueueEntry.objects.filter(queue=active_queue)
    serializer = QueueEntrySerializer(queue_entries, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def join_queue(request):
    active_queue = Queue.objects.filter(is_active=True).first()
    if not active_queue:
        return Response({"message": "No active queue found."}, status=status.HTTP_404_NOT_FOUND)
    
    patient = Patient.objects.get(user=request.user)
    position = QueueEntry.objects.filter(queue=active_queue).count() + 1
    queue_entry = QueueEntry.objects.create(queue=active_queue, patient=patient, position=position)
    serializer = QueueEntrySerializer(queue_entry)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
