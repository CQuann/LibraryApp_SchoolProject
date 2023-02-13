from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Student, TextBook, Author, Parallels, JustBook, TakeDates


class AuthorSerializer(ModelSerializer):


    class Meta:
        model = Author
        fields = ['id', 'name']


class TextBookSerializer(ModelSerializer):
    authors = AuthorSerializer(many=True)

    class Meta:
        model = TextBook
        fields = '__all__'
    
    def create(self, validated_data):
        authors_data = validated_data.pop('authors')
        textbook_instance = TextBook.objects.create(**validated_data)
        return textbook_instance

    def update(self, instance, validated_data):
        authors_data = validated_data.pop("authors")
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        instance.authors.set([])
        for author_data in authors_data:
            author_name = author_data.get('name')
            author_id = Author.objects.get(name=author_name)
            instance.authors.add(author_id)
        return instance


class JustBookSerializer(ModelSerializer):
    authors = AuthorSerializer(many=True)

    class Meta:
        model = JustBook
        fields = '__all__'

    def update(self, instance, validated_data):
        authors_data = validated_data.pop('authors')
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        instance.authors.set([])
        for author_data in authors_data:
            author_id = author_data.get('id')
            instance.authors.add(author_id)
        return instance


class StudentListSerializer(ModelSerializer):
    class Meta:
        model = Student
        exclude = ['text_books', 'just_books']


class TakeDateSerializer(ModelSerializer):
    class Meta:
        model = TakeDates
        fields = '__all__'


class StudentDetailSerializer(ModelSerializer, ):
    text_books = TextBookSerializer(many=True)
    just_books = JustBookSerializer(many=True)
    take_dates = TakeDateSerializer(many=True)

    class Meta:
        model = Student
        fields = '__all__'
    
    def create(self, validated_data):
        textbooks_data = validated_data.pop('text_books')
        justbooks_data = validated_data.pop('just_books')
        student_instance = Student.objects.create(**validated_data)
        return student_instance

    def update(self, instance, validated_data):
        textbooks_data = validated_data.pop('text_books')
        justbooks_data = validated_data.pop('just_books')
        take_dates = validated_data.pop('take_dates')
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        instance.text_books.set([])
        instance.just_books.set([])
        for tbook_data in textbooks_data:
            textbook_name = tbook_data.get('name')
            textbook_class_number = tbook_data.get('class_number')
            textbook_release_year = tbook_data.get('release_year')
            tbook_id = TextBook.objects.get(name=textbook_name, class_number=textbook_class_number, release_year=textbook_release_year)
            instance.text_books.add(tbook_id)
        for jbook_data in justbooks_data:
            justbook_name = jbook_data.get('name')
            jbook_id = JustBook.objects.get(name=justbook_name)
            instance.just_books.add(jbook_id)
        
        return instance


class ParallelsSerializer(ModelSerializer):
    class Meta:
        model = Parallels
        exclude = ['id']
