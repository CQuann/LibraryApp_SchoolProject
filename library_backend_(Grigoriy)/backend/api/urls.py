from django.urls import path
from .views import *


urlpatterns = [
    path('api/students/<int:class_num>/<int:class_index>/', get_students),
    path('api/student/<int:student_id>/', get_student_books),
    path('api/books/<int:num>/', get_books),
]
