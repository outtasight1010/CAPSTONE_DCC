from django.contrib import admin
from .models import Queue, QueueEntry

@admin.register(Queue)
class QueueAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'is_active']
    list_filter = ['is_active']
    search_fields = ['name']

@admin.register(QueueEntry)
class QueueEntryAdmin(admin.ModelAdmin):
    list_display = ['id', 'queue', 'patient', 'joined_at', 'position']
    list_filter = ['queue']
    search_fields = ['queue__name', 'patient__first_name', 'patient__last_name']
