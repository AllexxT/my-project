# Generated by Django 3.0.2 on 2020-02-18 01:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prices',
            name='oldPrice',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='productcard',
            name='description',
            field=models.TextField(),
        ),
    ]