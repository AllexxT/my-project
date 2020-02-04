from django.contrib import admin
from products.models import (
    ProductCard, Prices, Photos, News, Type, Subtype, Storage
)


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
        'storage',
        'description',
        'discount',
        'sizes',
        'sertificate',
    )
    list_display = (
        'name',
        'id',
        'storage',
        'description',
        'discount',
        'sizes',
        'sertificate',
    )


@admin.register(Type)
class TypeAdmin(admin.ModelAdmin):
    fields = (
        'ptype',
    )
    list_display = (
        'ptype',
    )


@admin.register(Subtype)
class SubtypeAdmin(admin.ModelAdmin):
    fields = (
        'subtype',
    )
    list_display = (
        'subtype',
    )


@admin.register(Storage)
class StorageAdmin(admin.ModelAdmin):
    # class SubtypeInline(admin.TabularInline):
    #     model = Subtype
    #     extra = 0

    # class TypeInline(admin.TabularInline):
    #     model = Type
    #     extra = 0
    # inlines = [SubtypeInline, TypeInline]
    fields = (
        'ptype',
        'subtype',
    )
    list_display = (
        'ptype',
        'subtype',
    )


@admin.register(Prices)
class PricesAdmin(admin.ModelAdmin):
    fields = (
        'product',
        'price',
        'color',
        'depth',
    )
    list_display = (
        'product',
        'price',
        'color',
        'depth',
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
    list_display = (
        'product',
        'title',
        'body',
    )
