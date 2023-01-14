from rest_framework.serializers import ModelSerializer
from .models import Student, TextBook, Author, Paralels


class AuthorSerializer(ModelSerializer):

    class Meta:
        model = Author
        exclude = ['id']


class TextBookSerializer(ModelSerializer):
    authors = AuthorSerializer(many=True)

    class Meta:
        model = TextBook
        fields = '__all__'


#не воркает
class StudentListSerializer(ModelSerializer):
    class Meta:
        model = Student
        exclude = ['text_books']


class StudentDetailSerializer(ModelSerializer, ):
    text_books = TextBookSerializer(many=True)

    class Meta:
        model = Student
        fields = '__all__'


class ParalelsSerializer(ModelSerializer):
    class Meta:
        model = Paralels
        exclude = ['id']
