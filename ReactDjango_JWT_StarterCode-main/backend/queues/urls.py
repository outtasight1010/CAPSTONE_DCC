from django.urls import path
from . import views  # Import your queue views here

urlpatterns = [
    path('active/', views.get_active_queue, name='get_active_queue'),
    path('join/', views.join_queue, name='join_queue'),
    # Add more URLs for other queue views if needed
]
