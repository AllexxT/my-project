from django.db import models


class ProductCard(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    image = models.ImageField(blank=True, null=True)
    # price = models.IntegerField()
    discount = models.BooleanField(blank=True)

    @property
    def prices(self):
        return self.prices_set.all()

    def __str__(self):
        return self.name


class Prices(models.Model):
    product = models.ForeignKey(
        ProductCard, on_delete=models.CASCADE, null=True
    )
    price = models.IntegerField(verbose_name='Price', blank=True)

    def __str__(self):
        return str(self.price)

    def __repr__(self):
        return str(self.price)
