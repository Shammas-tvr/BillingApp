from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from django.conf import settings
import os

def generate_invoice_pdf(invoice):
    print("PDF FUNCTION CALLED")
    file_name = f"invoice_{invoice.id}.pdf"
    file_path = os.path.join(settings.MEDIA_ROOT, "invoices", file_name)

    os.makedirs(os.path.dirname(file_path), exist_ok=True)

    c = canvas.Canvas(file_path, pagesize=A4)
    width, height = A4

    y = height - 50

    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, y, "INVOICE")

    y -= 40
    c.setFont("Helvetica", 10)
    c.drawString(50, y, f"Invoice No: {invoice.invoice_number}")
    y -= 20
    c.drawString(50, y, f"Customer: {invoice.customer_name}")
    y -= 20
    c.drawString(50, y, f"Contact: {invoice.customer_contact}")

    y -= 40
    c.drawString(50, y, f"Subtotal: ₹ {invoice.subtotal}")
    y -= 20
    c.drawString(50, y, f"Discount: ₹ {invoice.discount}")
    y -= 20
    c.drawString(50, y, f"Tax: ₹ {invoice.tax}")

    y -= 30
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, y, f"Total: ₹ {invoice.total}")

    c.showPage()
    c.save()

    return f"invoices/{file_name}"
