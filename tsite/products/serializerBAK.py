from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from products.models import ProductCard, Prices


class PriceSerializer(serializers.ModelSerializer):
    # for disable changing id after PUT(update) request
    id = serializers.IntegerField(required=False)

    class Meta:
        model = Prices
        fields = [
            'id',
            'product',
            'price'
        ]
        # for uninclude field of related model for child model
        read_only_fields = ('product',)


class ProductCardSerializer(serializers.ModelSerializer):
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

    def create(self, validated_data):
        prices = validated_data.pop('prices')
        product = ProductCard.objects.create(**validated_data)
        for price in prices:
            Prices.objects.create(**price, product=product)
        return product

    def update(self, instance, validated_data):
        prices = validated_data.pop('prices')
        instance.price = validated_data.get("name", instance.name)
        instance.save()
        keep_prices = []
        for price in prices:
            if 'id' in price.keys():
                if Prices.objects.filter(id=price["id"]).exists():
                    p = Prices.objects.get(id=price["id"])
                    p.price = price.get('price', p.price)
                    p.save()
                    keep_prices.append(p.id)
                else:
                    continue
            else:
                p = Prices.objects.create(**price, product=instance)
                keep_prices.append(p.id)
        for price in instance.prices:
            if price.id not in keep_prices:
                price.delete()

        return instance
