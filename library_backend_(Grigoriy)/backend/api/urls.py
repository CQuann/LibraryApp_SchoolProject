from django.urls import path
from .views import *

from rest_framework import routers


urlpatterns = [
    path('students/<int:c_num>/<int:c_index>/', StudentsFilter.as_view()),
]


router = routers.SimpleRouter()
router.register(r'students', StudentDetailViewSet)
router.register(r'students_all', StudentViewSet)
router.register(r'authors', AuthorsViewSet)
router.register(r'textbooks', TextBookViewSet)
router.register(r'pieces', PieceViewSet)
router.register(r'justbooks', JustBookViewSet)
router.register(r'parallels', ParallelViewSet)
urlpatterns += router.urls
