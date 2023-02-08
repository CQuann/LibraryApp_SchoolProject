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
    class_number = models.IntegerField('В каком классе выдаются', choices=CLASS_NUMBER_CHOICES)
    authors = models.ManyToManyField(Author)
    release_year = models.DateField(blank=True, default=None)
    relevant = models.SmallIntegerField(choices=CLASS_NUMBER_CHOICES, blank=True, null=True)

    def __str__(self):
        return f'{self.name} {self.class_number}'

    class Meta:
        verbose_name = 'Учебник'
        verbose_name_plural = 'Учебники'


class Piece(models.Model):
    """Произведения"""
    name = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Произведение'
        verbose_name_plural = 'Произведения'


class JustBook(models.Model):
    """Собрания произведений"""
    name = models.CharField(max_length=100)
    authors = models.ManyToManyField(Author)
    pieces = models.ManyToManyField(Piece)

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
