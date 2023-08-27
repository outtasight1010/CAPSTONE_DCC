from rest_framework import serializers
from .models import Queue, QueueEntry
from patients.serializers import PatientSerializer

class QueueEntrySerializer(serializers.ModelSerializer):
    patient = PatientSerializer()

    class Meta:
        model = QueueEntry
        fields = ['patient', 'joined_at', 'position']

class QueueSerializer(serializers.ModelSerializer):
    queue_entries = QueueEntrySerializer(many=True, source='queueentry_set')

    class Meta:
        model = Queue
        fields = ['id', 'name', 'queue_entries', 'is_active']
