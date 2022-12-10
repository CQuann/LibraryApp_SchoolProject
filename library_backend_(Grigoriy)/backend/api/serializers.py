from rest_framework import serializers
from .models import Student


class StudentListSerializer(serializers.ModelSerializer):
    text_books = serializers.SlugRelatedField(slug_field='name', many=True, read_only=True)
    class Meta:
        model = Student
        exclude = ('id',)


