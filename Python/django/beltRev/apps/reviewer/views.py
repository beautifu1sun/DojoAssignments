# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
import bcrypt
from django.contrib import messages
from .models import dbManager, Book, User, Review

# Create your views here.
def home(request):
    return render(request, 'reviewer/home.html')

def register_user(request):
    if request.method == "POST":
        errors = User.objects.reg_validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error, extra_tags='reg')
        else:
            user = User.objects.create(name = request.POST['name'], alias = request.POST['alias'], email = request.POST['email'], password = bcrypt.hashpw(request.POST['pass'].encode(), bcrypt.gensalt()))
            request.session['activeUser'] = user.id
            return redirect('/books')
    return redirect('/')

def login_user(request):
    if request.method == "POST":
        errors = User.objects.log_validation(request.POST)
        if len(errors):
            for error in errors:
                messages.error(request, error, extra_tags='log')
        else:
            request.session['activeUser'] = User.objects.filter(email = request.POST['email'])[0].id
            return redirect('/books')
    return redirect('/')

def logout_user(request):
    try:
        del request.session['activeUser']
    except KeyError:
        pass
    return redirect('/')

def books(request):
    if (request.session['activeUser']):
        reviews = []
        otherbooks = {}
        allreviews = Review.objects.order_by("-created_at")
        for i in range(0,3):
            reviews.append(allreviews[i])
            
        for book in Book.objects.all():
            otherbooks[book.name]=book.id
            for review in reviews:
                if book.name == review.book.name:
                    if otherbooks.has_key(book.name):
                        otherbooks.pop(book.name)
        content = {
            'reviews': reviews,
            'user': User.objects.get(id=request.session['activeUser']),
            'otherbooks': otherbooks
        }
        return render(request, 'reviewer/books.html', content)
    return redirect('/')

def add_book(request):
    if (request.session['activeUser']):
        authors = {}
        for book in Book.objects.all():
            authors[book.author] = book.id
        return render(request, 'reviewer/add_book.html', authors)
    return redirect('/')

def new_book(request):
    if request.method == "POST":
        newbook = Book.objects.create(name=request.POST['title'], author=request.POST['author'])
        user = User.objects.get(id=request.session['activeUser'])
        Review.objects.create(rating=int(request.POST['rating']), comment=request.POST['review'], user = user, book = newbook)
        return redirect('../../books/{}'.format(newbook.id))
    else:
        return redirect('/')
    
def display_book(request, number):
    book = Book.objects.get(id=number)
    content = {
        'book': book,
        'reviews': Review.objects.filter(book=book).order_by("-created_at")
    }
    return render(request, 'reviewer/display_book.html', content) 

def add_review(request, number):
    if request.method=="POST":
        Review.objects.create(rating=int(request.POST['rating']), comment=request.POST['comment'], user = User.objects.get(id = request.session['activeUser']), book = Book.objects.get(id=number))
    return redirect('../../books/{}'.format(number))

def display_user(request, number):
    books = {}
    for review in User.objects.get(id=number).userReviews.all():
        books[review.book.name] = review.book.id
    content = {
        'user': User.objects.get(id=number),
        'books': books
    }
    if (request.session['activeUser']):
        return render(request, 'reviewer/display_user.html', content)
    return redirect('/')

def delete_review(request, number1, number2):
    Review.objects.get(id=number2).delete()
    return redirect('/books/{}'.format(number1))
    