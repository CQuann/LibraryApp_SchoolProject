from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Book, Student, Journal
from .serializers import BookSerializer, StudentSerializer, JournalSerializer


@api_view(('GET',))
def get_students(request, class_num, class_index):
    queryset = Student.objects.filter(class_number=class_num, class_index=class_index)
    serializer = StudentSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(('GET', 'POST'))
def get_student_books(request, student_id):
    queryset = Journal.objects.filter(student=student_id)
    serializer = JournalSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(('GET',))
def get_books(request, num):
    queryset = Book.objects.filter(class_number=num)
    serializer = BookSerializer(queryset, many=True)
    return Response(serializer.data)
