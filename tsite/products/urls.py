from rest_framework import routers
from .api import ProductCardViewSet, NewsViewSet
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path


router = routers.DefaultRouter()
router.register('api/products', ProductCardViewSet, 'products')
router.register('api/news', NewsViewSet, 'news')

urlpatterns = router.urls
