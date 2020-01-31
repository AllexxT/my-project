from products.models import ProductCard, News
from rest_framework import viewsets, permissions
from .serializer import (
    ProductCardSerializer, NewsSerializer, NewsPostSerializer
)


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
    # serializer_class = NewsSerializer

    def get_serializer_class(self):
        if self.action == 'create':
            return NewsPostSerializer
        else:
            return NewsSerializer
