import requests
from bs4 import BeautifulSoup

url="https://eztv.ag/search/"
urla=input("Enter the TV Series Required:")
urla=urla.strip()
x=""
urrl=urla.split(" ")
furl="-".join(urrl)
url=url+furl

page=requests.get(url)
soup=BeautifulSoup(page.text,'html.parser')
links=[]
titles=[]
namel=soup.select("a[class='magnet']")

for link in namel:
    links.append(link.get('href'))
    titles.append(link.get('title'))

for i in titles:
    print(i,end="\n")