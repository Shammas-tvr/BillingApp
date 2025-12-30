# billing/urls.py
from django.urls import path
from .import views

urlpatterns = [
    path("api/invoices/",views.create_invoice),
]

