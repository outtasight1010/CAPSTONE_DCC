from django.contrib import admin
from .models import MedicalStaff

@admin.register(MedicalStaff)
class MedicalStaffAdmin(admin.ModelAdmin):
    list_display = ('user', 'full_name')