# Generated by Django 3.0.2 on 2020-01-14 18:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_auto_20200114_1841'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='product',
        ),
        migrations.AddField(
            model_name='productcard',
            name='news',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.News'),
        ),
    ]
