from rest_framework import generics
from .models import Booking
from .serializers import BookingSerializer
from rest_framework.permissions import IsAuthenticated

class BookingListCreateView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]