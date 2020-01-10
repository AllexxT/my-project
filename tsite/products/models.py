from django.db import models


class ProductCard(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    image = models.ImageField(blank=True)
    price = models.IntegerField()
    discount = models.BooleanField(blank=True)
