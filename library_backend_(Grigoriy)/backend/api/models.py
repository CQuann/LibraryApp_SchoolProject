from django.db import models


CLASS_NUMBER_CHOICES = [
        (7, 7),
        (8, 8),
        (9, 9),
        (10, 10),
        (11, 11),
    ]


class Author(models.Model):
    """Авторы"""
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Автор'
        verbose_name_plural = 'Авторы'


class TextBook(models.Model):
    """Учебники"""
    name = models.CharField('Название', max_length=100)
    class_number = models.CharField('В каком классе выдаются', max_length=10)
    authors = models.ManyToManyField(Author)
    release_year = models.PositiveIntegerField(blank=True, default=None)
    amount = models.PositiveIntegerField('Количество учебников', default=0)

    def __str__(self):
        return f'{self.name} {self.class_number}'

    class Meta:
        verbose_name = 'Учебник'
        verbose_name_plural = 'Учебники'


class JustBook(models.Model):
    """Собрания произведений"""
    name = models.CharField(max_length=100)
    authors = models.ManyToManyField(Author)
    description = models.TextField(max_length=1000, default='')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Сборник'
        verbose_name_plural = 'Сборники'


class Student(models.Model):
    """Ученики"""
    CLASS_INDEX_CHOICES = [
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
    ]
    surname = models.CharField('Фамилия', max_length=100)
    name = models.CharField('Имя', max_length=100)
    patronymic = models.CharField('Отчество', max_length=100)
    text_books = models.ManyToManyField(TextBook, blank=True, default=None)
    just_books = models.ManyToManyField(JustBook, blank=True, default=None)
    class_number = models.PositiveSmallIntegerField(choices=CLASS_NUMBER_CHOICES)
    class_index = models.PositiveSmallIntegerField(choices=CLASS_INDEX_CHOICES)

    def __str__(self):
        return f'{self.surname} {self.name} {self.patronymic} {self.class_number}-{self.class_index}'

    class Meta:
        verbose_name = 'Ученик'
        verbose_name_plural = 'Ученики'


class Parallels(models.Model):
    main_class = models.PositiveSmallIntegerField(choices=CLASS_NUMBER_CHOICES)
    parallel_numbers = models.PositiveSmallIntegerField()

    def __str__(self):
        return f'{self.main_class}-{self.parallel_numbers}'
