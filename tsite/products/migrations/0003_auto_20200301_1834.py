# Generated by Django 3.0.2 on 2020-03-01 18:34

from django.db import migrations, models
import django.db.models.deletion
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20200218_0134'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exposition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=50, null=True)),
                ('title', models.CharField(max_length=50, null=True)),
            ],
        ),
        migrations.AlterModelOptions(
            name='prices',
            options={'verbose_name': 'Цену', 'verbose_name_plural': 'Цены'},
        ),
        migrations.AlterModelOptions(
            name='productcard',
            options={'verbose_name': 'Товар', 'verbose_name_plural': 'Товары'},
        ),
        migrations.AlterField(
            model_name='productcard',
            name='sizes',
            field=models.TextField(blank=True, max_length=400),
        ),
        migrations.CreateModel(
            name='ExpositionPhotos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=150, null=True)),
                ('photo', versatileimagefield.fields.VersatileImageField(blank=True, upload_to='', verbose_name='Photo')),
                ('ppoi', versatileimagefield.fields.PPOIField(default='0.5x0.5', editable=False, max_length=20)),
                ('exposition', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Exposition')),
            ],
        ),
    ]
