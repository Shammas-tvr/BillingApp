# billing/models.py
from django.db import models

class Invoice(models.Model):
    invoice_number = models.CharField(
        max_length=20,
        unique=False,
        blank=True,
        null=True
    )
    customer_name = models.CharField(max_length=100,null=True)
    customer_contact = models.CharField(max_length=20,null=True)

    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    tax = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True,null=True,blank=True)

    def save(self, *args, **kwargs):
        # Backend is the boss of money
        self.total = self.subtotal - self.discount + self.tax

        # Auto invoice number (simple version)
        if not self.invoice_number:
            self.invoice_number = f"INV-{self.id or ''}"

        super().save(*args, **kwargs)

