from rest_framework import serializers
from products.models import ProductCard


class ProductCardSerializer(serializers.ModelSerializer):
    # image_url = serializers.SerializerMethodField('get_image')

    # def get_image(self, obj):
    #     return obj.image.url

    class Meta:
        model = ProductCard
        fields = '__all__'
