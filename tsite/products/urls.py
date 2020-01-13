from rest_framework import routers
from .api import ProductCardViewSet
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path


router = routers.DefaultRouter()
router.register('api/products', ProductCardViewSet, 'products')

urlpatterns = router.urls
