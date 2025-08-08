from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    title = models.CharField(max_length=200)  # Заголовок статьи
    content = models.TextField()              # Текст статьи
    author = models.ForeignKey(User, on_delete=models.CASCADE)  # Автор (связь с User)
    published_date = models.DateTimeField(auto_now_add=True)  # Дата публикации
    category = models.CharField(max_length=100)  # Категория новости

    def __str__(self):
        return self.title

class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)  # Связь со статьёй
    author = models.CharField(max_length=100)  # Имя комментатора
    text = models.TextField()                  # Текст комментария
    created_date = models.DateTimeField(auto_now_add=True)  # Дата создания

    def __str__(self):
        return f"Комментарий от {self.author}"
# Create your models here.
