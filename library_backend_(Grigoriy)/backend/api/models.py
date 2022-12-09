from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Piece(models.Model):
    name = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

class TextBook(models.Model):
    CLASS_NUMBER_CHOICES = [
        (7, 7),
        (8, 8),
        (9, 9),
        (10, 10),
        (11, 11),
    ]
    name = models.CharField('Название', max_length=100)
    class_number = models.IntegerField('В каком классе выдаются', choices=CLASS_NUMBER_CHOICES)
    authors = models.ManyToManyField(Author, related_name='author')

    def __str__(self):
        return f'{self.name} {self.class_number}'


class JustBook(models.Model):
    name = models.CharField(max_length=100)
    authors = models.ManyToManyField(Author, related_name='author')
    pieces = models.ManyToManyField(Piece, related_name='piece')


class Student(models.Model):
    name = models.CharField('Имя', max_length=100, default='')
    surname = models.CharField('Фамилия', max_length=100, default='')
    patronymic = models.CharField('Отчество', max_length=100, default='')
    text_books = models.ManyToManyField(TextBook)

    def __str__(self):
        return f'{self.name} {self.surname} {self.patronymic}'
