from django.urls import path
from django.urls.conf import include
from . import views
urlpatterns = [
    path('', views.curated, name='photo_curated'),
    path('index/', views.index, name='index'),
    path('search/', views.search_photo, name='search'),
    path('photos/', views.photo_id, name='photos'),
    path('download/', views.phosave, name='download'),


]
# photo_id
# [Unit]search_photo
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
