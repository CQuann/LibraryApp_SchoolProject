from django.contrib import admin

from .models import TextBook, Student, Author, JustBook, Piece, Paralels

admin.site.register(Student)
admin.site.register(TextBook)
admin.site.register(Author)
admin.site.register(JustBook)
admin.site.register(Piece)
admin.site.register(Paralels)
