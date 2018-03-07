# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
# Create your views here.
prices = {
    '1001': 19.99,
    '1002': 29.99,
    '1003': 4.99,
    '1004': 49.99,
}

def store(request):
    if 'spent' not in request.session:
        request.session['spent'] = 0
    if 'bought_items' not in request.session:
        request.session['bought_items'] = 0    
    return render(request, 'amadon/store.html')

def thanks(request):
    return render(request, 'amadon/checkout.html')

def buy(request):
    if request.method == "POST":
        qty = request.POST['quantity']
        price = prices[request.POST['product_id']]
        total = float(qty) * float(price)
        request.session['spent'] += total
        request.session['bought_items'] += int(qty)
        request.session['last_purchase'] = total
    return redirect('/amadon/checkout')