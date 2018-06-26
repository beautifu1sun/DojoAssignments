from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^$', views.main),
    url(r'^travels$', views.travels),
    url(r'^travels/destination/(?P<number>\d+)$', views.travel_info),
    url(r'^travels/add$', views.add_trip),
    url(r'^travels/add/create$', views.create_trip),
    url(r'^travel/join/(?P<number>\d+)', views.travel_join),
    url(r'^users/login$', views.login_user),
    url(r'^users/register$', views.register_user),
    url(r'^users/logout$', views.logout_user),
]