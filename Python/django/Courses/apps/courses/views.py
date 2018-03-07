# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from .models import Course, Description, dbManager
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'courses/index.html', { 'courses': Course.objects.all() })

def confirm(request, number):
    return render(request, 'courses/conf.html', { 'course': Course.objects.get(id=number) })

def delete(request):
    if request.method == "POST":
        Course.objects.get(id=request.POST['id']).delete()
    return redirect('/')

def add(request):
    if request.method == "POST":
        errors = Course.objects.validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error)
            return redirect('/')
        else:
            newCourse = Course.objects.create(name=request.POST['name'])
            Description.objects.create(desc=request.POST['desc'], course=newCourse)
    return redirect('/')
