from django.contrib import admin
from products.models import (
    ProductCard, Prices, Photos, News, Page, Article, DepthPrice, Depth
)


@admin.register(ProductCard)
class ProductCardAdmin(admin.ModelAdmin):

    # class PricesInline(admin.TabularInline):
    #     model = Prices
    #     extra = 0

    class PhotosInline(admin.TabularInline):
        model = Photos
        extra = 0

    class NewsInline(admin.TabularInline):
        model = News
        extra = 0
    inlines = [PhotosInline, NewsInline]

    fields = (
        'name',
        'article',
        'description',
        'discount',
        'sizes',
        'sertificate',
    )
    list_display = (
        'name',
        'article',
        # 'description',
        'discount',
        'sizes',
        'sertificate',
    )


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):

    class ArticleInline(admin.TabularInline):
        model = Article
        extra = 0

    inlines = [ArticleInline]

    fields = (
        'page',
    )
    list_display = (
        'page',
    )


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    class ProductCardInline(admin.StackedInline):
        model = ProductCard
        extra = 0
    inlines = [ProductCardInline]

    fields = (
        'page',
        'article',
        'title',
        'unit',
    )
    list_display = (
        'page',
        'article',
        'title',
        'unit',
    )


@admin.register(Prices)
class PricesAdmin(admin.ModelAdmin):
    class DepthPriceInline(admin.TabularInline):
        model = DepthPrice
        extra = 0
    inlines = [DepthPriceInline]
    fields = (
        'product',
        'color',
        'oldPrice',
    )
    list_display = (
        'product',
        'color',
        'oldPrice',
    )


@admin.register(Depth)
class DepthAdmin(admin.ModelAdmin):
    class DepthPriceInline(admin.StackedInline):
        model = DepthPrice
        extra = 0
    inlines = [DepthPriceInline]
    fields = (
        'size',
    )


@admin.register(DepthPrice)
class DepthPriceAdmin(admin.ModelAdmin):
    fields = (
        'price',
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
