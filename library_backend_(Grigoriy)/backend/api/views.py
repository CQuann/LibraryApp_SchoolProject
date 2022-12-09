from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Student
from .serializers import StudentListSerializer


class StudentsListView(APIView):
    def get(self, request, c_num, c_index):
        students = Student.objects.filter(class_number=c_num, class_index=c_index)
        serializer = StudentListSerializer(many=True)
        return Response(serializer.data)

