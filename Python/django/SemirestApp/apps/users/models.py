# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re

# Create your models here.
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9-_.]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
    
class UserManager(models.Manager):
    def validation(self, postData):
        errors = []
        if len(postData['fname']) < 2:
            errors.append('First name should be more or equal to 2 characters.')
        if len(postData['lname']) < 2:
            errors.append('Last name should be more or equal to 2 characters.')
        if not EMAIL_REGEX.match(postData['email']):
            errors.append('Email is not valid.')
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
    objects = UserManager()

    def __str__():
        return '{} {}'.format(self.first_name, self.last_name)

