from django.contrib import admin

from .models import TextBook, Student, Author, JustBook, Parallels, TakeDates, LibraryWorker

admin.site.register(Student)
admin.site.register(TextBook)
admin.site.register(Author)
admin.site.register(JustBook)
admin.site.register(Parallels)
admin.site.register(TakeDates)
admin.site.register(LibraryWorker)