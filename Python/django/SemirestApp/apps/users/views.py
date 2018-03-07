# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from .models import User, UserManager
from django.contrib import messages

# Create your views here.

def index(request):
    return render(request, 'users/index.html', {'users': User.objects.all()})

def new(request):
    return render(request, 'users/new.html')

def edit(request, number):
    return render(request, 'users/edit.html', {'user': User.objects.get(id=number)})

def show(request, number):
    return render(request, 'users/show.html', {'user': User.objects.get(id=number)})

def create(request):
    if request.method == "POST":
        errors = User.objects.validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/users/new')
        else:
            User.objects.create(first_name=request.POST['fname'], last_name=request.POST['lname'], email=request.POST['email'])
    return redirect('/users/{}'.format(User.objects.last().id))

def destroy(request, number):
    User.objects.get(id=number).delete()       
    return redirect('/users')

def update(request):
    if request.method == "POST":
        errors = User.objects.validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/users/{}/edit'.format(request.POST['id']))
        else:
            updatedUser = User.objects.get(id=request.POST['id'])
            updatedUser.first_name = request.POST['fname']
            updatedUser.last_name = request.POST['lname']
            updatedUser.email = request.POST['email']
            updatedUser.save()
    return redirect('/users/{}'.format(request.POST['id']))