from django.urls import path
from .views import *

from rest_framework import routers

urlpatterns = [path('authorization/', PasswordCheck)]

router = routers.SimpleRouter()
router.register(r'students', StudentViewSet)
router.register(r'authors', AuthorsViewSet)
router.register(r'textbooks', TextBookViewSet)
router.register(r'justbooks', JustBookViewSet)
router.register(r'parallels', ParallelViewSet)
urlpatterns += router.urls
