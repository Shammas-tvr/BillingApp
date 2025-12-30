from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from authentication.models import Admin
from .models import Manager, Staff


def admin_login(request):
    if request.method == "POST":
        admin_id = request.POST['admin_id']
        password = request.POST['password']

        user = authenticate(request, admin_id=admin_id, password=password)

        if user:
            login(request, user)
            return redirect('/developer-dashboard/')
        return render(request, 'admin_login.html', {'error': 'Invalid credentials'})

    return render(request, 'admin_login.html')


def admin_logout(request):
    logout(request)
    return redirect('/login/')


# ---------------- Manager ----------------

def create_manager(request):
    if not request.user.is_superuser:
        return redirect('/no-access/')

    if request.method == "POST":
        name = request.POST['company_name']
        password = request.POST['password']

        manager = Manager(company_name=name, admin=request.user)
        manager.set_password(password)
        manager.save()
        return redirect('/manager-list/')

    return render(request, 'create_manager.html')


def manager_login(request):
    if request.method == "POST":
        name = request.POST['company_name']
        password = request.POST['password']

        try:
            manager = Manager.objects.get(company_name=name, is_active=True)
            if manager.check_password(password):
                request.session['manager_id'] = manager.id
                return redirect('/manager-dashboard/')
        except Manager.DoesNotExist:
            pass

    return render(request, 'manager_login.html', {'error': 'Invalid credentials'})


# ---------------- Staff ----------------

def create_staff(request):
    manager_id = request.session.get('manager_id')
    if not manager_id:
        return redirect('/manager-login/')

    manager = Manager.objects.get(id=manager_id)

    if request.method == "POST":
        staff_id = request.POST['staff_id']
        password = request.POST['password']

        staff = Staff(manager=manager, staff_id=staff_id)
        staff.set_password(password)
        staff.save()
        return redirect('/staff-list/')

    return render(request, 'create_staff.html')


def staff_login(request):
    if request.method == "POST":
        staff_id = request.POST['staff_id']
        password = request.POST['password']

        try:
            staff = Staff.objects.get(staff_id=staff_id, is_active=True)
            if staff.check_password(password):
                request.session['staff_id'] = staff.id
                return redirect('/billing-dashboard/')
        except Staff.DoesNotExist:
            pass

    return render(request, 'staff_login.html', {'error': 'Invalid credentials'})

