from django.http import JsonResponse, HttpResponse, response
from django.shortcuts import redirect, render
import json
import urllib3
import requests
from urllib.parse import urlencode, urlparse
import urllib3

http = urllib3.PoolManager(num_pools=50)

# r = http.request('GET', "https://api.pexels.com/v1/search?query=people")
# d=urlparse('https://api.pexels.com/v1/search?query=people')
# print(d)


def pix_url(path, query):
    url = "https://api.pexels.com/"
    # headers = {"Authorization":"563492ad6f91700001000001ca1240af18a448d6a4eb8751fb5a3971"
    # }

    r = http.request('GET',
                     f"{url}/{path}?{query}",
                     headers={
                         "Authorization": "563492ad6f91700001000001ca1240af18a448d6a4eb8751fb5a3971"},
                     )
    # urls = f"{url}{path}?{query}"
    # print(urls)
    # r = http.request('GET', urls, headers)
    repons = json.loads(r.data.decode('utf-8'))
    # print(repons)

    return repons


def download(url):


    with requests.get(url, stream=True) as r:

        with open("wind-turbine.jpg", "wb") as f:
            for chunk in r.iter_content(chunk_size=1024):
                if chunk:
                    return f.write(chunk)
    