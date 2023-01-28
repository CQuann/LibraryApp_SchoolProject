from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from .filters import *

from .models import Student, Author, TextBook, Parallels, JustBook, Piece
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


class PieceViewSet(viewsets.ModelViewSet):
    queryset = Piece.objects.all()
    serializer_class = serializers.PieceSerializer
    filterset_class = PieceFilter


class JustBookViewSet(viewsets.ModelViewSet):
    queryset = JustBook.objects.all()
    serializer_class = serializers.JustBookSerializer


class StudentsFilter(APIView):
    def get(self, request, c_num, c_index):
        queryset = Student.objects.filter(class_number=c_num, class_index=c_index)
        serializer = serializers.StudentListSerializer(queryset, many=True)
        return Response(serializer.data)


class StudentDetailViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = serializers.StudentDetailSerializer


class ParallelViewSet(viewsets.ModelViewSet):
    queryset = Parallels.objects.all()
    serializer_class = serializers.ParallelsSerializer
