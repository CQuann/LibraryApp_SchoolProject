from rest_framework.serializers import ModelSerializer, SlugRelatedField
from .models import Student, TextBook, Author


class AuthorSerializer(ModelSerializer):

    class Meta:
        model = Author
        fields = '__all__'


class TextBookSerializer(ModelSerializer):
    authors = AuthorSerializer(many=True, read_only=True)

    class Meta:
        model = TextBook
        fields = '__all__'


class StudentListSerializer(ModelSerializer):
    class Meta:
        model = Student
        exclude = ['text_books']


class StudentDetailSerializer(ModelSerializer):
    text_books = TextBookSerializer(many=True, read_only=True)

    class Meta:
        model = Student
        fields = '__all__'

