from os import path, putenv
from urllib.parse import urlencode
from django.http.response import JsonResponse
from django.shortcuts import render
from .api import pix_url
import urllib
from django.http import JsonResponse, HttpResponse, response
from urllib.parse import unquote_plus
import requests
import urllib3
from PIL import Image
import requests
from io import BytesIO
http = urllib3.PoolManager(num_pools=50)


def index(request):
    return render(request, 'base.html')


def curated(request):

    path = '/v1/curated/'
    que = {
        # 'query':value,
        'page': 1,
        'per_page': 80

    }
    query = urlencode(que)
    # print(query)
    base_data = pix_url(path, query)
    content = {
        'data': base_data,

    }
    # return JsonResponse(content)
    # print(base_data)

    return render(request, 'homepage.html', content)


def search_photo(request):
    value = ""

    if request.is_ajax and request.method == "GET":

        value = request.GET.get('search')
    else:
        value = ""

    path = '/v1/search'
    que = {
        'query': value,
        'per_page': 80

    }
    query = urlencode(que)
    base_data = pix_url(path, query)
    content = {
        'data': base_data,

    }
    # print(base_data)
    return JsonResponse(content)
    # return render(request, 'search_photo.html', content)


def photo_id(request):
    value = ""

    if request.is_ajax and request.method == "GET":

        value = request.GET.get('id')
    else:
        value = ""

    path = f'/v1/photos/{value}'
    print(path)
    que = {

    }

    query = urlencode(que)
    base_data = pix_url(path, query)
    content = {
        'data': base_data,
        'status': '400'

    }
    # print(base_data)
    return JsonResponse(content)
    # return render(request, 'photodetail.html', content)


def phosave(request):
    value = ""

    if request.is_ajax and request.method == "GET":

        value = request.GET.get('phid')
    else:
        value = ""
    url = unquote_plus(value)
    print(url)

    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with open("wind_turbine.jpg", "wb") as f:
        with urllib.request.urlopen(req) as r:
            f.write(r.read())

    # url = unquote_plus(value)
    # print(url)
    # # response = requests.get(p)
    # response = requests.get(url)
    # img = Image.open(BytesIO(response.content))
    # img.show()
    # img.save()

    return JsonResponse("succes")
