# Generated by Django 3.0.2 on 2020-04-28 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0008_auto_20200426_0039'),
    ]

    operations = [
        migrations.AddField(
            model_name='prices',
            name='noDepthPrice',
            field=models.FloatField(blank=True, null=True, verbose_name='Если здесь указана цена, таблица работать не будет'),
        ),
        migrations.AlterField(
            model_name='productcard',
            name='discount',
            field=models.BooleanField(blank=True, verbose_name='Скидка'),
        ),
        migrations.AlterField(
            model_name='productcard',
            name='sertificate',
            field=models.BooleanField(blank=True, default=False, verbose_name='Сертификат'),
        ),
    ]