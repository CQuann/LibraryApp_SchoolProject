from django.contrib import admin

from .models import Book, Student, Journal

admin.site.register(Book)
admin.site.register(Journal)
admin.site.register(Student)
