# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re, bcrypt
# Create your models here.
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class dbManager(models.Manager):
    def reg_validation(self, postData):
        errors = []
        if len(postData['fname'])<1 or len(postData['lname'])<1 or len(postData['email'])<1 or len(postData['pass'])<1:
            errors.append('All fields are required')
        else:
            if len(postData['fname']) < 2 or len(postData['lname']) < 2:
                errors.append('First and Last names must be not fewer than 2 characters')
            else:
                if not (postData['fname'].isalpha() or postData['lname'].isalpha()):
                    errors.append('First and Last names: letters only')
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
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = dbManager()
