# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class dbManager(models.Manager):
    def validation(self, postData):
        errors = []
        if len(postData['name']) <= 5:
            errors.append('Course name must be more than 5 characters')
        if len(postData['desc']) <= 15:
            errors.append('Course description must be more than 15 characters')
        return errors

class Course(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    objects = dbManager()

class Description(models.Model):
    desc = models.TextField()
    course = models.OneToOneField(Course, related_name='description')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
