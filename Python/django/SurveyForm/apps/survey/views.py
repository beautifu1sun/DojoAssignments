from __future__ import unicode_literals
from django.shortcuts import render, redirect, HttpResponse

def index(request):
    return render(request, 'survey/index.html')

def result(request):
    return render(request, 'survey/result.html')

def process(request):
    if request.method == "POST":
        if 'counter' not in request.session:
            request.session['counter'] = 0
        request.session['counter'] += 1
        request.session['name']=request.POST['name']
        request.session['location']=request.POST['location']
        request.session['fav_lan']=request.POST['fav_lan']
        request.session['comment']=request.POST['comment']
        return redirect('/result')
    else: 
        return redirect('/')    
