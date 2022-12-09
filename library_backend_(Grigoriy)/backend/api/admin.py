from django.contrib import admin

from .models import TextBook, Student, Author

admin.site.register(Student)
admin.site.register(TextBook)
admin.site.register(Author)
