# billing/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import InvoiceSerializer
from .utils import generate_invoice_pdf

@api_view(['POST'])
def create_invoice(request):
    serializer = InvoiceSerializer(data=request.data)

    if serializer.is_valid():
        invoice = serializer.save()

        pdf_path = generate_invoice_pdf(invoice)
        invoice.invoice_file = pdf_path
        invoice.save()

        return Response(
            {
                "message": "Invoice created",
                "invoice_id": invoice.id,
                "total": invoice.total,
                "pdf_url": invoice.invoice_file.url
            },
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


