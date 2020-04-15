import uuid
from django.db import models
from django.contrib.auth.models import User
from versatileimagefield.fields import VersatileImageField, PPOIField
from datetime import date

##############################################################################


class Page(models.Model):
    page = models.CharField("Page", max_length=30, primary_key=True)

    def article(self):
        return self.article_set.all()

    def __str__(self):
        return str(self.page)


class Article(models.Model):
    article = models.CharField(
        'Тип продукта(не изменять)', max_length=30, primary_key=True)
    title = models.CharField('Заголовок', max_length=100, default='Заголовок')
    page = models.ForeignKey(Page, on_delete=models.CASCADE)
    unit = models.CharField('Единица измерения', max_length=10, blank=True)

    def __str__(self):
        return f'{self.title}, {self.article}'
##############################################################################


class ProductCard(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    article = models.ForeignKey(
        Article, on_delete=models.SET_NULL, null=True
    )
    owner = models.ForeignKey(
        User, related_name="Description", on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    discount = models.BooleanField(blank=True)
    sertificate = models.BooleanField(blank=True, default=False)
    sizes = models.TextField(max_length=400, blank=True)  # default='..X..'

    @property
    def news(self):
        return self.news_set.all()

    @property
    def prices(self):
        return self.prices_set.all()

    @property
    def photos(self):
        return self.photos_set.all()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Товары'
        verbose_name = 'Товар'
##############################################################################


class Prices(models.Model):
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, null=True
    )
    color = models.CharField(max_length=100, default='gray')
    oldPrice = models.IntegerField(blank=True, null=True)

    @property
    def depthPrice(self):
        return self.depthprice_set.all()

    @property
    def lowerPrice(self):
        prices = self.depthprice_set.all()
        if len(prices) > 0:
            return min([item.price for item in prices])
        return None

    def __str__(self):
        return str(self.color)

    class Meta:
        verbose_name_plural = 'Цены'
        verbose_name = 'Цену'


class Depth(models.Model):
    size = models.CharField(max_length=20, null=True)

    def __str__(self):
        return str(self.size)


class DepthPrice(models.Model):
    prices = models.ForeignKey(Prices, on_delete=models.CASCADE)
    depth = models.ForeignKey(Depth, on_delete=models.CASCADE)
    price = models.IntegerField(verbose_name='Price', null=True)

    def __str__(self):
        return str(self.price)

    # class Meta:
    #     verbose_name_plural = 'Цена/Толщина'
    #     verbose_name = 'Цена/Толщина'
##############################################################################


class Photos(models.Model):
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, null=True
    )
    photo = VersatileImageField(
        verbose_name='Photo', ppoi_field='ppoi', blank=True
    )
    ppoi = PPOIField()
##############################################################################
# News #


class News(models.Model):
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, null=True
    )

    title = models.CharField(max_length=50, null=True)
    body = models.TextField(max_length=500, null=True)
    changed = models.DateTimeField(auto_now=True, blank=True)
    created = models.DateField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-changed']
##############################################################################
# Exposition #


class Exposition(models.Model):
    address = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=50, null=True)

    types = (
        ('sett', 'Тротуарка'),
        ('brick', 'Блок и кирпич'),
        ('fence', 'Забор'),
        ('parapet', 'Крышки и парапеты'),
        ('monuments', 'Памятники')
    )
    category = models.CharField(
        max_length=10,
        choices=types,
        help_text='Категория',
        default='trotuarka',
    )

    @property
    def photos(self):
        return self.expositionphotos_set.all()

    def __str__(self):
        return self.address

    class Meta:
        verbose_name_plural = 'Наши работы'
        verbose_name = 'Нашу работу'


class ExpositionPhotos(models.Model):
    exposition = models.ForeignKey(
        Exposition, on_delete=models.CASCADE, null=True
    )
    description = models.CharField(max_length=150, null=True)
    photo = VersatileImageField(
        verbose_name='Photo', ppoi_field='ppoi', blank=True
    )
    ppoi = PPOIField()

    def __str__(self):
        return self.exposition.address
