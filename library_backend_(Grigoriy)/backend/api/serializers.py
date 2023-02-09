from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Student, TextBook, Author, Parallels, JustBook, Piece


class AuthorSerializer(ModelSerializer):


    class Meta:
        model = Author
        fields = ['id', 'name']


class TextBookSerializer(ModelSerializer):
    authors = AuthorSerializer(many=True)

    class Meta:
        model = TextBook
        fields = '__all__'

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


class PieceSerializer(ModelSerializer):
    author = AuthorSerializer(many=False)

    class Meta:
        model = Piece
        fields = '__all__'


class JustBookSerializer(ModelSerializer):
    authors = AuthorSerializer(many=True)
    pieces = PieceSerializer(many=True)

    class Meta:
        model = JustBook
        fields = '__all__'

    def update(self, instance, validated_data):
        authors_data = validated_data.pop('authors')
        pieces_data = validated_data.pop('pieces')
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        instance.authors.set([])
        instance.pieces.set([])
        for author_data in authors_data:
            author_id = author_data.get('id')
            instance.authors.add(author_id)
        for piece_data in pieces_data:
            piece_name = piece_data.get('name')
            piece_id = Piece.objects.get(name=piece_name)
            instance.pieces.add(piece_id)
        return instance


class StudentListSerializer(ModelSerializer):
    class Meta:
        model = Student
        exclude = ['text_books', 'just_books']


class StudentDetailSerializer(ModelSerializer, ):
    text_books = TextBookSerializer(many=True)
    just_books = JustBookSerializer(many=True)

    class Meta:
        model = Student
        fields = '__all__'

    def update(self, instance, validated_data):
        textbooks_data = validated_data.pop('text_books')
        justbooks_data = validated_data.pop('just_books')
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        instance.text_books.set([])
        instance.just_books.set([])
        for tbook_data in textbooks_data:
            textbook_name = tbook_data.get('name')
            tbook_id = TextBook.objects.get(name=textbook_name)
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
