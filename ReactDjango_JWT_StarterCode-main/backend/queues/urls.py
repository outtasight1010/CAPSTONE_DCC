from django.urls import path
from . import views  

urlpatterns = [
    path('active/', views.get_active_queue, name='get_active_queue'),
    path('join/', views.join_queue, name='join_queue'),
    path('queue-patients/', views.get_queue_patients, name='get_queue_patients'),
    
]
