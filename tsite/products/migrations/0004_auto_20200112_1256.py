# Generated by Django 3.0.2 on 2020-01-12 12:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20200112_1250'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prices',
            name='product',
        ),
        migrations.AddField(
            model_name='productcard',
            name='prices',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Prices'),
        ),
    ]
