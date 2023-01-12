import requests
response = requests.get('https://www.instagram.com/vsdg_group/')
print (response.status_code)
print (response.content)