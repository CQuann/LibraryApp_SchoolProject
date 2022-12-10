from django.urls import path
from . import views


urlpatterns = [
    path('students/<int:c_num>/<int:c_index>/', views.StudentsListView.as_view()),
    path('students/<int:pk>/', views.StudentView.as_view()),
]
