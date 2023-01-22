from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Student, TextBook, Author, Paralels, JustBook, Piece


class AuthorSerializer(ModelSerializer):
    id = serializers.IntegerField(read_only=False)

    class Meta:
        model = Author
        fields = ['id', 'name']


class TextBookSerializer(ModelSerializer):
    authors = AuthorSerializer(many=True)
    id = serializers.IntegerField(read_only=False)

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
            author_id = author_data.get('id')
            instance.authors.add(author_id)
        return instance


class PieceSerializer(ModelSerializer):
    id = serializers.IntegerField(read_only=False)
    author = AuthorSerializer(many=False)

    class Meta:
        model = Piece
        fields = '__all__'


class JustBookSerializer(ModelSerializer):
    id = serializers.IntegerField(read_only=False)
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
            piece_id = piece_data.get('id')
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
            tbook_id = tbook_data.get('id')
            instance.text_books.add(tbook_id)
        for jbook_data in justbooks_data:
            jbook_id = jbook_data.get('id')
            instance.just_books.add(jbook_id)
        return instance


class ParalelsSerializer(ModelSerializer):
    class Meta:
        model = Paralels
        exclude = ['id']
