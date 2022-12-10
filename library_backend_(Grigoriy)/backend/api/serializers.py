from rest_framework import serializers
from .models import Student, TextBook


class TextBooksSerizlizer(serializers.ModelSerializer):
    authors = serializers.SlugRelatedField(slug_field='name', many=True, read_only=True)

    class Meta:
        model = TextBook
        fields = '__all__'


class StudentListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        exclude = ('id', 'text_books')


class StudentSerializer(serializers.ModelSerializer):
    text_books = TextBooksSerizlizer(many=True)

    class Meta:
        model = Student
        fields = '__all__'
