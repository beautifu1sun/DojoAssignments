from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^amadon$', views.store),
    url(r'^amadon/checkout$', views.thanks),
    url(r'^amadon/buy$', views.buy),
]