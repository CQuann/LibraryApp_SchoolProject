from django_filters import rest_framework as filters
from .models import Student, TextBook, Author, Piece


class StudentFilter(filters.FilterSet):
    class_number = filters.NumberFilter(field_name='class_number')
    class_index = filters.NumberFilter(field_name='class_index')

    class Meta:
        model = Student
        fields = ['class_number', 'class_index']


class TextBookFilter(filters.FilterSet):
    class_number = filters.NumberFilter(field_name='class_number')
    authors = filters.ModelMultipleChoiceFilter(
        field_name='authors__name',
        to_field_name='name',
        queryset=Author.objects.all())
    release_year = filters.DateRangeFilter(field_name='release_year')

    class Meta:
        model = TextBook
        fields = ['class_number', 'authors', 'release_year']


class PieceFilter(filters.FilterSet):
    author = filters.ModelChoiceFilter(
        field_name='author',
        to_field_name='name',
        queryset=Author.objects.all()
    )

    class Meta:
        model = Piece
        fields = ['author']
