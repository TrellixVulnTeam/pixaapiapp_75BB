#!/bin/bash
# Name of the application
NAME="pix"
# Django project directory
DJANGODIR=/home/rudi/dev/pixcelapi
# we will communicte using this unix socket
SOCKFILE=/home/rudi/dev/pixcelapi/bin/gunicorn.sock
# the user to run as
USER=rudi
# the group to run as
GROUP=www-data
# how many worker processes should Gunicorn spawn
NUM_WORKERS=3
# which settings file should Django use
DJANGO_SETTINGS_MODULE=pix.settings
# WSGI module name
DJANGO_WSGI_MODULE=pix.wsgi
echo "Starting $NAME as `whoami`"
# Activate the virtual environment
cd $DJANGODIR
source ../bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH
# Create the run directory if it doesn't exist
RUNDIR=$(dirname $SOCKFILE)
test -d $RUNDIR || mkdir -p $RUNDIR
# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
exec ../bin/gunicorn ${DJANGO_WSGI_MODULE}:application \
--name $NAME \
--workers $NUM_WORKERS \
--user=$USER --group=$GROUP \
--bind=unix:$SOCKFILE \
--log-level=debug \
--log-file=-