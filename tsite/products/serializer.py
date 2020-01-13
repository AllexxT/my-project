from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
# from drf_writable_nested.mixins import UniqueFieldsMixin
from products.models import ProductCard, Prices


class PriceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Prices
        fields = [
            'id',
            'product',
            'price'
        ]
        read_only_fields = ('product',)


class ProductCardSerializer(WritableNestedModelSerializer):
    # prices serializer
    prices = PriceSerializer(many=True, allow_null=True)

    class Meta:
        model = ProductCard
        fields = (
            'id',
            'name',
            'description',
            'image',
            'discount',
            'prices'
        )
        # depth allows to see nested view
        # depth = 1
