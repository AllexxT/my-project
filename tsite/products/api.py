from products.models import (
    ProductCard, News, Exposition, ServicePage, Sertificat)
from rest_framework import viewsets, permissions, generics
from .serializer import (
    ProductCardSerializer, NewsSerializer, NewsPostSerializer,
    ProductCardUpdateSerializer,
    ExpositionSerializer,
    ServicePageSerializer, SertificatSerializer
)


class SertificatViewSet(viewsets.ModelViewSet):
    queryset = Sertificat.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    def get_serializer_class(self):
        return SertificatSerializer


class ServicePageViewSet(viewsets.ModelViewSet):
    queryset = ServicePage.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    def get_queryset(self):
        if self.request.query_params.get('page'):
            filter = self.request.query_params.get('page')
            return ServicePage.objects.filter(page=filter)
        else:
            return ServicePage.objects.all()

    def get_serializer_class(self):
        if self.action == 'create':
            return ServicePageSerializer
        else:
            return ServicePageSerializer


class ProductCardViewSet(viewsets.ModelViewSet):
    queryset = ProductCard.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    def perform_create(self, serializer):
        return serializer.save(owner=self.request.user)

    def get_queryset(self):
        if self.request.query_params.get('page'):
            filter = self.request.query_params.get('page')
            return ProductCard.objects.filter(article__page=filter)
        else:
            return ProductCard.objects.all()

    def get_serializer_class(self):
        if self.action == 'update':
            return ProductCardUpdateSerializer
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


class ExpositionViewSet(viewsets.ModelViewSet):
    queryset = Exposition.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]

    def get_serializer_class(self):
        if self.action == 'create':
            return ExpositionSerializer
        else:
            return ExpositionSerializer
