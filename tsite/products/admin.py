from django.contrib import admin
from products.models import ProductCard, Prices


@admin.register(ProductCard)
class ProductCardAdmin(admin.ModelAdmin):

    class PricesInline(admin.TabularInline):
        model = Prices
        extra = 0
    inlines = [PricesInline]

    fields = (
        'name',
        'id',
        'description',
        'image',
        'discount'
    )
    list_display = (
        'name',
        'id',
        'description',
        'image',
        'discount',
    )


@admin.register(Prices)
class PricesAdmin(admin.ModelAdmin):
    fields = (
        'product',
        'price',
    )
    list_display = (
        'product',
        'price',
    )
