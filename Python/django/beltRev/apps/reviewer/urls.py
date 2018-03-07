from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^$', views.home),
    url(r'^books$', views.books),
    url(r'^books/(?P<number>\d+)$', views.display_book),
    url(r'^books/add$', views.add_book),
    url(r'^books/add/newbook$', views.new_book),
    url(r'^users/(?P<number>\d+)$', views.display_user),
    url(r'^users/register$', views.register_user),
    url(r'^users/login$', views.login_user),
    url(r'^users/logout$', views.logout_user),
    url(r'^books/(?P<number>\d+)/addreview$', views.add_review),
    url(r'^books/(?P<number1>\d+)/deletereview/(?P<number2>\d+)$', views.delete_review),
]