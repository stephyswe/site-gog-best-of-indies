import os
import requests
import re


# ensure file function
def ensure_file_exists(filename, url, folder):
    path = os.path.join(folder, filename)
    if not os.path.exists(path):
        response = requests.get(url)
        with open(path, "wb") as file:
            file.write(response.content)
    else:
        print(f"{filename} already exists.")


# open and read css file
with open("amaze.css", "r") as file:
    css_content = file.read()

# extract all urls using regex
urls = re.findall(r"url\((.*?)\)", css_content)

# base url
base_url = "https://store-static-modular.gog-statics.com/en/"

# assume you want to download files to current working directory
folder = os.getcwd()

# check and download each file
for url in urls:
    # split the url to get the file name, you might need to adjust this depending on your url structure
    filename = url.split("/")[-1]
    full_url = base_url + url
    ensure_file_exists(filename, full_url, folder)
