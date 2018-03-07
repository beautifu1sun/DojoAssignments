from __future__ import unicode_literals
from django.shortcuts import render, HttpResponse, redirect
import random
from time import localtime, strftime

def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
    return render(request, 'game/index.html')

def process(request, gold, where):
    date = strftime('%Y/%m/%d %I:%M %p', localtime())
    if gold > 0:
        content = {
            'text': 'Earned {} gold from the {}! ({})'.format(str(gold), where, date),
            'color': 'green',
        }
    elif gold < 0:  
        content = {
            'text': 'Entered the {} and lost {} gold... Ouch! ({})'.format(where, str(abs(gold)), date),
            'color': 'red',
        }
    else:
        content = {
            'text': 'Entered the {} and won nothing. ({})'.format(where, date),
            'color': 'gray',
        }
    request.session['gold'] += gold
    if 'log' not in request.session:
        request.session['log'] = [content]
    else: 
        saved_log = request.session['log']
        saved_log.insert(0,content)
        request.session['log'] = saved_log

def process_farm(request):
    if request.method == "POST":
        process(request, random.randint(10, 20), 'farm')
    return redirect('/') 
    
def process_cave(request):
    if request.method == "POST":
        process(request, random.randint(5, 10), 'cave')
    return redirect('/')
    
def process_house(request):
    if request.method == "POST":
        process(request, random.randint(2, 5), 'house')
    return redirect('/')
    
def process_casino(request):
    if request.method == "POST":
        process(request, random.randint(-50, 50), 'casino')
    return redirect('/')

def reset(request):
    if request.method == "POST":
        for key in request.session.keys():
            del request.session[key]
    return redirect('/')