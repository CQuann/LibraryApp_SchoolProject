from django.urls import path
from .views import *

from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'students/all', StudentViewSet)
router.register(r'authors', AuthorsViewSet)
router.register(r'textbooks', TextBookViewSet)
urlpatterns = router.urls


urlpatterns = [
    path('students/<int:c_num>/<int:c_index>/', StudentsFilter.as_view()),
    path('students/<int:pk>/', StudentDetailView.as_view())
]





