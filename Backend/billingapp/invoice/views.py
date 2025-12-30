# billing/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import InvoiceSerializer

@api_view(['POST'])
def create_invoice(request):
    print(request.data)
    serializer = InvoiceSerializer(data=request.data)


    if serializer.is_valid():
        invoice = serializer.save()
        return Response(
            {
                "message": "Invoice created successfully",
                "invoice_id": invoice.id,
                "total": invoice.total
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

