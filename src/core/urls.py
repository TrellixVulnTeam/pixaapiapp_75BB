from django.urls import path
from django.urls.conf import include
from . import views
urlpatterns = [
    path('', views.photo_api, name='index'),
    #  path('', views.index, name='index'),
]


# [Unit]
# Description=gunicorn daemon
# After=network.target

# [Service]
# User=rudi
# Group=www-data
# WorkingDirectory=/home/rudi/dev/pixcelapi/pixcel/pix

# ExecStart=/home/rudi/dev/pixcelapi/pixcel/bin/gunicorn --access-logfile - --workers 3 --bind unix:/home/rudi/dev/pixcelapi/pixcel/pix
# /myproject.sock pix.wsgi:application

# [Install]
# WantedBy=multi-user.target