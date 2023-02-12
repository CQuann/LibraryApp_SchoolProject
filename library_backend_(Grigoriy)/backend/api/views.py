from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from .filters import *
from rest_framework.decorators import api_view, renderer_classes

from .models import Student, Author, TextBook, Parallels, JustBook
from . import serializers


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    filterset_class = StudentFilter

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.StudentListSerializer
        else:
            return serializers.StudentDetailSerializer


class AuthorsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AuthorSerializer
    queryset = Author.objects.all()


class TextBookViewSet(viewsets.ModelViewSet):
    queryset = TextBook.objects.all()
    serializer_class = serializers.TextBookSerializer
    filterset_class = TextBookFilter


class JustBookViewSet(viewsets.ModelViewSet):
    queryset = JustBook.objects.all()
    serializer_class = serializers.JustBookSerializer


class StudentDetailViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = serializers.StudentDetailSerializer


class ParallelViewSet(viewsets.ModelViewSet):
    queryset = Parallels.objects.all()
    serializer_class = serializers.ParallelsSerializer


password = '1234'
@api_view(['POST'])
def autentification(request):
    ok = request.data == password
    return Response(ok)