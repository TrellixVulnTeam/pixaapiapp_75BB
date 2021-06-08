import requests
import urllib


url='https://images.pexels.com/photos/7974360/pexels-photo-7974360.jpeg'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with open("wind_turbine.jpg", "wb") as f:
    with urllib.request.urlopen(req) as r:
        f.write(r.read())