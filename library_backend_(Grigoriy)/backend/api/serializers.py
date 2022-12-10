from rest_framework import serializers
from .models import Student, TextBook


class TextBooksSerizlizer(serializers.ModelSerializer):
    class Meta:
        model = TextBook
        fields = '__all__'


class StudentListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        exclude = ('id', 'text_books')
