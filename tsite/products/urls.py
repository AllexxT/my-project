from rest_framework import routers
from .api import (ProductCardViewSet, NewsViewSet,
                  ExpositionViewSet, ServicePageViewSet)
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path


router = routers.DefaultRouter()
router.register('api/products', ProductCardViewSet, 'products')
router.register('api/news', NewsViewSet, 'news')
router.register('api/exposition', ExpositionViewSet, 'exposition')
router.register('api/serviceprices', ServicePageViewSet, 'serviceprices')

urlpatterns = router.urls
