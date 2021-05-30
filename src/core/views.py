from os import path, putenv
from django.http.response import JsonResponse
from django.shortcuts import render
from .api import pix_url

from django.http import JsonResponse, HttpResponse, response


# def index(request):
#     return render(request, 'index.html')


def photo_api(request):
    value=""
# request.is_ajax and
    if  request.method == "GET":

        value = request.GET.get('query')


    path = '/v1/search'
    query = f'query={value}'

    base_data = pix_url(path, query)
    content = {
        'data': base_data
    }

    return render(request, 'index.html', content)
