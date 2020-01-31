from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from versatileimagefield.serializers import VersatileImageFieldSerializer
# from drf_writable_nested.mixins import UniqueFieldsMixin
from products.models import ProductCard, Prices, Photos, News


##############################################################################
# ProductCard#


class PhotosSerializer(serializers.ModelSerializer):
    """Photos serializer"""
    photo = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('thumbnail', 'thumbnail__100x100'),
            ('medium_square_crop', 'crop__400x400'),
            ('small_square_crop', 'crop__50x50')
        ]
    )

    class Meta:
        model = Photos
        fields = [
            'product',
            'id',
            'photo',
        ]
        read_only_fields = ('product',)


class PriceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Prices
        fields = [
            'id',
            'product',
            'color',
            'price',
            'depth'
        ]
        read_only_fields = ('product',)


class ProductCardSerializer(WritableNestedModelSerializer):
    # Prices serializer
    prices = PriceSerializer(many=True, allow_null=True)
    # Photos serializer
    photos = PhotosSerializer(many=True, allow_null=True)

    class Meta:
        model = ProductCard
        fields = (
            'id',
            'name',
            'sertificate',
            'sizes',
            'description',
            'discount',
            'prices',
            'photos',
        )
        # depth allows to see nested view
        # depth = 1


##############################################################################
# News #


class NewsSerializer(serializers.ModelSerializer):
    product = ProductCardSerializer(required=False)

    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'body',
            'product',
            'changed',
            'created',
        )


class NewsPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'body',
            'product',
            'changed',
            'created',
        )
