from products.models import ProductCard, News
from rest_framework import viewsets, permissions, generics
from .serializer import (
    ProductCardSerializer, NewsSerializer, NewsPostSerializer,
)


class ProductCardViewSet(viewsets.ModelViewSet):
    queryset = ProductCard.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    def get_queryset(self):
        if self.request.query_params.get('type'):
            filter = self.request.query_params.get('type')
            return ProductCard.objects.filter(storage__ptype=filter)
        else:
            return ProductCard.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return ProductCardSerializer
        else:
            return ProductCardSerializer


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    def get_serializer_class(self):
        if self.action == 'create':
            return NewsPostSerializer
        else:
            return NewsSerializer
