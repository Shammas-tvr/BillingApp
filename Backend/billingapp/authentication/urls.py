from django.urls import path
from . import views

urlpatterns = [
    #Admin
    path('login/', views.admin_login, name='admin_login'),
    # Manager
    path('manager/create/', views.create_manager, name='create_manager'),
    path('manager/login/', views.manager_login, name='manager_login'),

    # Staff
    path('staff/create/', views.create_staff, name='create_staff'),
    path('staff/login/', views.staff_login, name='staff_login'),
]
