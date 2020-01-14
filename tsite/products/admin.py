from django.contrib import admin
from products.models import ProductCard, Prices, Photos, News


@admin.register(ProductCard)
class ProductCardAdmin(admin.ModelAdmin):

    class PricesInline(admin.TabularInline):
        model = Prices
        extra = 0

    class PhotosInline(admin.TabularInline):
        model = Photos
        extra = 0

    class NewsInline(admin.TabularInline):
        model = News
        extra = 0
    inlines = [PricesInline, PhotosInline, NewsInline]

    fields = (
        'name',
        'id',
        'description',
        'discount'
    )
    list_display = (
        'name',
        'id',
        'description',
        'discount',
    )


@admin.register(Prices)
class PricesAdmin(admin.ModelAdmin):
    fields = (
        'product',
        'price',
        'priceName',
    )
    list_display = (
        'product',
        'price',
        'priceName',
    )


@admin.register(Photos)
class PhotosAdmin(admin.ModelAdmin):
    fields = (
        'product',
        'photo',
    )


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    fields = (
        'product',
        'title',
        'body',
    )
