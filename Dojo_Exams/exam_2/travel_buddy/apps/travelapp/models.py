# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re, bcrypt, datetime

# Create your models here.

class dbManager(models.Manager):
    def reg_validation(self, postData):
        errors = []
        if len(postData['name'])<1 or len(postData['username'])<1 or len(postData['pass'])<1:
            errors.append('All fields are required')
        else:
            users = User.objects.filter(username = postData['username'])
            if len(users) > 0:
                errors.append("This username already exist. Please, login.")
                return errors
            if len(postData['name']) < 3 or len(postData['username']) < 3:
                errors.append('Name and Username must be not fewer than 3 characters')
            if len(postData['pass'])<8:
                errors.append('Password must be not fewer than 8 characters')
            else:
                if postData['pass']!=postData['passc']:
                    errors.append('Passwords should match') 
        return errors

    def log_validation(self, postData):
        user = User.objects.filter(username = postData['username'])
        if not len(user): 
            return ["Username and/or password didn't match"]
        else:
            if not bcrypt.checkpw(postData['pass'].encode(), user[0].password.encode()):  
                return ["Username and/or password didn't match"]
        return ""

    def trip_validation(self, postData):
        errors = []
        if len(postData['dest'])<1 or len(postData['desc'])<1 or len(postData['from'])<1 or len(postData['to'])<1:
            errors.append('All fields are required')
        else:
            if postData['from']<=datetime.datetime.today().strftime('%Y-%m-%d'):
                errors.append("'Travel Date From' should be future-dated")
            elif postData['to']<postData['from']:
                errors.append("'Travel Date To' should not be before the 'Travel Date From'")
        return errors

class User(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = dbManager()

class Plan(models.Model):
    destination = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    date_from = models.DateField()
    date_to = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = dbManager()
    creator = models.ForeignKey(User, related_name="created_plans")
    joined_users = models.ManyToManyField(User, related_name="joined_plans")
