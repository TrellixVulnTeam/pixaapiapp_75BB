from PIL import Image
import requests
from io import BytesIO
url = 'https://images.pexels.com/photos/3977230/pexels-photo-3977230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
response = requests.get(url)
img = Image.open(BytesIO(response.content))
img.show()