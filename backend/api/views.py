from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, FloodDataSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import FloodData
from rest_framework.decorators import api_view
from rest_framework.response import Response


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class DataListView(generics.ListAPIView):
    serializer_class = FloodDataSerializer
    permission_classes = [IsAuthenticated]
    # permission_classes = [AllowAny]

    def get_queryset(self):
        data = FloodData.objects.all().order_by('-timestamp')[:10]
        return data


@api_view(["POST"])
def receive_data(request):
    serializer = FloodDataSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Data Saved"})

    return Response(serializer.errors)
