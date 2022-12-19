from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.views import APIView

from .models import Student, Author, TextBook
from . import serializers


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()

    def get_queryset(self, c_num, c_index):
        queryset = Student.objects.filter(class_number=c_num, class_index=c_index)
        return queryset

    def get_serializer_class(self):
        if self.action == 'list':
            return serializers.StudentListSerializer
        elif self.action == "retrieve":
            return serializers.StudentDetailSerializer
        return serializers.StudentDetailSerializer


class AuthorsViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.AuthorSerializer
    queryset = Author.objects.all()


class TextBookViewSet(viewsets.ModelViewSet):
    queryset = TextBook.objects.all()
    serializer_class = serializers.TextBookSerializer


class StudentsFilter(APIView):
    def get(self, request, c_num, c_index):
        queryset = Student.objects.filter(class_number=c_num, class_index=c_index)
        serializer = serializers.StudentListSerializer(queryset, many=True)
        return Response(serializer.data)


class StudentDetailView(generics.RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = serializers.StudentDetailSerializer

