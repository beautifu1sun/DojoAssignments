# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re, bcrypt
# Create your models here.
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[A-Za-z]+\s[A-Za-z]+$')

class dbManager(models.Manager):
    def reg_validation(self, postData):
        errors = []
        if len(postData['name'])<1 or len(postData['alias'])<1 or len(postData['email'])<1 or len(postData['pass'])<1:
            errors.append('All fields are required')
        else:
            users = User.objects.filter(email = postData['email'])
            if len(users) > 0:
                errors.append("You've already registered")
                return errors
            if len(postData['name']) < 2 or len(postData['alias']) < 2:
                errors.append('Name and alias must be not fewer than 2 characters')
            else:
                if not NAME_REGEX.match(postData['name']):
                    errors.append('Name: Only letters with one space between First and Last names')
            if not EMAIL_REGEX.match(postData['email']):
                errors.append('Email must be valid')
            if len(postData['pass'])<8:
                errors.append('Password must be not fewer than 8 characters')
            else:
                if postData['pass']!=postData['passc']:
                    errors.append('Passwords should match') 
        return errors

    def log_validation(self, postData):
        user = User.objects.filter(email = postData['email'])
        if not len(user): 
            return ["Email and/or password didn't match"]
        else:
            if not bcrypt.checkpw(postData['pass'].encode(), user[0].password.encode()):  
                return ["Email and/or password didn't match"]
        return ""

class User(models.Model):
    name = models.CharField(max_length=255)
    alias = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = dbManager()

class Book(models.Model):
    name = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Review(models.Model):
    rating = models.IntegerField()
    comment = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name="userReviews")
    book = models.ForeignKey(Book, related_name="bookReviews")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
