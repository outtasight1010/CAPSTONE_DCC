from django.contrib import admin
from .models import Patient

@admin.register(Patient)
class PatientAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'first_name', 'last_name', 'joined_queue']
    list_filter = ['joined_queue']
    search_fields = ['user__username', 'first_name', 'last_name']

   

