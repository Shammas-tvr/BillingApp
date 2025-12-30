from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.contrib.auth.hashers import make_password,check_password


# Create your models here.
class AdminManager(BaseUserManager):
    def create_user(self,admin_id,password=None):
        if not admin_id:
            raise ValueError("Admin ID is required")

        admin_id=admin_id.strip().lower()
        admin=self.model(admin_id=admin_id)
        admin.set_password(password)
        admin.is_active=True
        admin.save(using=self._db)
        return admin
    
    def create_superuser(self,admin_id,password):
        admin=self.create_user(admin_id,password)
        admin.is_staff=True
        admin.is_superuser=True
        admin.save(using=self._db)
        return admin
    
class Admin(AbstractBaseUser):
    admin_id= models.CharField(max_length=100,unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    is_superuser=models.BooleanField(default=True)
    date_joined=models.DateTimeField(auto_now_add=True)

    objects=AdminManager()
    USERNAME_FIELD = 'admin_id'

    
    def __str__(self):
        return self.admin_id

class Manager(models.Model):
    admin=models.ForeignKey(Admin,on_delete=models.CASCADE)   
    company_name=models.CharField(max_length=255)
    password=models.CharField(max_length=75)
    is_active=models.BooleanField(default=True)
    created_at=models.DateField(auto_now_add=True)


    def set_password(self,raw_password):
        self.password=make_password(raw_password)     


    def check_password(self,raw_password):
        return check_password(raw_password,self.password)

    def __str__(self):
        return self.company_name



class Staff(models.Model):
    manager=models.ForeignKey(Manager,on_delete=models.CASCADE)

    staff_id=models.CharField(max_length=100,unique=True)
    password=models.CharField(max_length=75)

    is_active=models.BooleanField(default=True)
    created_at=models.DateField(auto_now_add=True)


    class Meta:
        unique_together=("manager","staff_id")


    def set_password(self, raw_password):
        self.password = make_password(raw_password)
    

    def check_password(self,raw_password):
        return check_password(raw_password,self.password)

    def __str__(self):
        return self.staff_id 


