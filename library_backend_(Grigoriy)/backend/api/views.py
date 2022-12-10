from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Student
from .serializers import StudentListSerializer, StudentSerializer


class StudentsListView(APIView):
    def get(self, request, c_num, c_index):
        students = Student.objects.filter(class_number=c_num, class_index=c_index)
        serializer = StudentListSerializer(students, many=True)
        return Response(serializer.data)


class StudentView(APIView):
    def get(self, request, pk):
        student = Student.objects.get(id=pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data)
