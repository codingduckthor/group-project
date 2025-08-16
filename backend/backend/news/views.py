import requests
from django.http import JsonResponse
from django.shortcuts import render

def main_page(request):
    api_key = "af8ebb559bd24d63a9a9c53a97d402c6"
    url = f"https://newsapi.org/v2/top-headlines?country=us&apiKey={api_key}"

    response = requests.get(url, timeout=5)
    articles = []
    if response.status_code == 200:
        articles = response.json().get("articles", [])

    return render(request, "main.html", {"articles": articles})
def main_page(request):
    return render(request, 'main.html')

def articles_page(request):
    return render(request, 'articles.html')

def categories_page(request):
    return render(request, 'categories.html')

def site_info_page(request):
    return render(request, 'site_info.html')

def login_page(request):
    return render(request, 'login_page.html')
