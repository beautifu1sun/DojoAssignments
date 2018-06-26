# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
from .models import User, Plan, dbManager
from django.contrib import messages
import bcrypt
# Create your views here.

def main(request):
    return render(request, 'travelapp/home.html')

def register_user(request):
    if request.method == "POST":
        errors = User.objects.reg_validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error, extra_tags='reg')
        else:
            user = User.objects.create(name = request.POST['name'], username = request.POST['username'], password = bcrypt.hashpw(request.POST['pass'].encode(), bcrypt.gensalt()))
            request.session['activeUser'] = user.id
            return redirect('/travels')
    return redirect('/')

def login_user(request):
    if request.method == "POST":
        errors = User.objects.log_validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error, extra_tags='log')
        else:
            request.session['activeUser'] = User.objects.filter(username = request.POST['username'])[0].id
            return redirect('/travels')
    return redirect('/')

def logout_user(request):
    try:
        del request.session['activeUser']
    except KeyError:
        pass
    return redirect('/')

def travels(request):
    if request.session['activeUser']:  
        user = User.objects.get(id = request.session['activeUser'])
        plans = Plan.objects.exclude(creator = user)
        otherplans = []
        for plan in plans:
            if user not in plan.joined_users.all():
                otherplans.append(plan)
        content = {
            'user': user,
            'otherplans': otherplans,
        }
        return render(request, 'travelapp/travels.html', content)
    return redirect('/')

def travel_info(request, number):
    if request.session['activeUser']:  
        return render(request, 'travelapp/travel_info.html', { 'plan': Plan.objects.get(id=number)})
    return redirect('/')

def add_trip(request):
    if request.session['activeUser']:  
        return render(request, 'travelapp/travel_add.html')
    return redirect('/')

def create_trip(request):
    if request.method == "POST" and request.session['activeUser']:
        errors = Plan.objects.trip_validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error, extra_tags='trip')
                return redirect('/travels/add')
        else:
            Plan.objects.create(destination=request.POST['dest'], description=request.POST['desc'], date_from=request.POST['from'], date_to=request.POST['to'], creator=User.objects.get(id=request.session['activeUser']))
    return redirect ('/travels')

def travel_join(request, number):
    if request.session['activeUser']:
        chosenplan = Plan.objects.get(id=number)
        chosenplan.joined_users.add(User.objects.get(id=request.session['activeUser']))
        chosenplan.save()
    return redirect('/travels')
