from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from versatileimagefield.serializers import VersatileImageFieldSerializer
# from drf_writable_nested.mixins import UniqueFieldsMixin
from products.models import ProductCard, Prices, Photos, News

##############################################################################
# News #


class NewsSerializMeta(serializers.SerializerMetaclass):
    def __init__(cls, class_name, base_classes, attributes):
        super(NewsSerializMeta, cls).__init__(class_name, base_classes, attributes)


class NewsSerializer(WritableNestedModelSerializer, metaclass=NewsSerializMeta):
    class Meta:
        model = News
        fields = (
            'id',
            'title',
            'body',
            'product'
        )
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
            'priceName',
            'price'
        ]
        read_only_fields = ('product',)


class ProductCardSerializer(WritableNestedModelSerializer):
    # Prices serializer
    prices = PriceSerializer(many=True, allow_null=True)
    # Photos serializer
    photos = PhotosSerializer(many=True, allow_null=True)
    NewsSerializer.deph = None
    news = NewsSerializer(many=True, allow_null=True)

    class Meta:
        model = ProductCard
        fields = (
            'id',
            'name',
            'description',
            'discount',
            'prices',
            'news',
            'photos',
        )
        # depth allows to see nested view
        # depth = 1
