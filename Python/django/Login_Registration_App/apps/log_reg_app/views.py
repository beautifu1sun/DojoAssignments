# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import dbManager, User
import bcrypt

# Create your views here.
def home(request):
    return render(request, 'log_reg_app/home.html')

def success(request):
    return render(request, 'log_reg_app/success.html')

def register(request):
    if request.method == "POST":
        errors = User.objects.reg_validation(request.POST)
        print errors
        if len(errors):
            for error in errors:
                messages.error(request, error, extra_tags='reg')
        else:
            user = User.objects.create(first_name = request.POST['fname'], last_name = request.POST['lname'], email = request.POST['email'], password = bcrypt.hashpw(request.POST['pass'].encode(), bcrypt.gensalt()))
            messages.success(request, request.POST['fname'], extra_tags="name")
            messages.success(request, 'Successfully registered', extra_tags="text")
            return redirect('/success')
    return redirect('/')

def login(request):
    if request.method == "POST":
        errors = User.objects.log_validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error, extra_tags='log')
        else:
            messages.success(request, User.objects.get(email=request.POST['email']).first_name, extra_tags="name")
            messages.success(request, 'Successfully logged in', extra_tags="text")
            return redirect('/success')
    return redirect('/')
            