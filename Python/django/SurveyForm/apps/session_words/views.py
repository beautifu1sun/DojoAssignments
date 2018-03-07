# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
from time import localtime, strftime
import random


def index(request):
    return render(request, 'session_words/index.html')

def add(request):
    if request.method == "POST":
        content = {
            'word': request.POST['word'],
            'color': request.POST['color'],
            'date': str(strftime('%I:%M:%S%p, %B %d %Y', localtime()))
        }
        if request.POST.getlist('big'):
            content['size'] = str(random.randint(130,200))
        else:
            content['size'] = '120'

    if 'words' not in request.session:
        request.session['words'] = [content]
    else:
        saved_list = request.session['words']
        saved_list.append(content)
        request.session['words'] = saved_list
        
    return redirect('/session_words')

def clear(request):
    for key in request.session.keys():
        del request.session[key]
    return redirect('/session_words')