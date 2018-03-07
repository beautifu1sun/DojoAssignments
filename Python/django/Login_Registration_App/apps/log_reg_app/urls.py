from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home),
    url(r'^success$', views.success),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
]