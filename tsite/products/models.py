from django.db import models
from versatileimagefield.fields import VersatileImageField, PPOIField
from datetime import date


class ProductCard(models.Model):
    id = models.CharField(max_length=30, primary_key=True, unique=True)
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(max_length=1000)
    discount = models.BooleanField(blank=True)
    sertificate = models.BooleanField(blank=True, default=False)
    sizes = models.TextField(max_length=400, blank=True, default='..X..')

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


class Prices(models.Model):
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, null=True
    )
    price = models.IntegerField(verbose_name='Price', blank=True)
    color = models.CharField(max_length=100, default='gray')
    depth = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return str(self.price)

    def __repr__(self):
        return str(self.price)


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
    changed = models.DateField(auto_now=True, blank=True)
    created = models.DateField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.title
