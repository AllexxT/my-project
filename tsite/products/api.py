from products.models import ProductCard
from rest_framework import viewsets, permissions
from .serializer import ProductCardSerializer


class ProductCardViewSet(viewsets.ModelViewSet):
    queryset = ProductCard.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductCardSerializer
