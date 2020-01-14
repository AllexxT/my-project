from products.models import ProductCard, News
from rest_framework import viewsets, permissions
from .serializer import ProductCardSerializer, NewsSerializer


class ProductCardViewSet(viewsets.ModelViewSet):
    queryset = ProductCard.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ProductCardSerializer


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = NewsSerializer
