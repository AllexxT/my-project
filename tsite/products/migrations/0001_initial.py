# Generated by Django 3.0.2 on 2020-05-03 20:44

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid
import versatileimagefield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('article', models.CharField(max_length=30, primary_key=True, serialize=False, verbose_name='Тип продукта(не изменять)')),
                ('title', models.CharField(default='Заголовок', max_length=100, verbose_name='Заголовок')),
                ('unit', models.CharField(blank=True, max_length=10, verbose_name='Единица измерения')),
            ],
        ),
        migrations.CreateModel(
            name='Depth',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Exposition',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=50, null=True)),
                ('description', models.CharField(blank=True, max_length=50, null=True)),
                ('category', models.CharField(choices=[('sett', 'Тротуарка'), ('brick', 'Блок и кирпич'), ('fence', 'Забор'), ('parapet', 'Крышки и парапеты'), ('monuments', 'Памятники')], default='trotuarka', help_text='Категория', max_length=10)),
            ],
            options={
                'verbose_name': 'Нашу работу',
                'verbose_name_plural': 'Наши работы',
            },
        ),
        migrations.CreateModel(
            name='Page',
            fields=[
                ('page', models.CharField(max_length=30, primary_key=True, serialize=False, verbose_name='Page')),
            ],
        ),
        migrations.CreateModel(
            name='ProductCard',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('discount', models.BooleanField(blank=True, verbose_name='Скидка')),
                ('sertificate', models.BooleanField(blank=True, default=False, verbose_name='Сертификат')),
                ('sizes', models.TextField(blank=True, max_length=400, null=True)),
                ('article', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.Article', verbose_name='sett=Тротуарка, fence=Забор,             brick=Кирпич, monuments=Памятники')),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Description', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Товар',
                'verbose_name_plural': 'Товары',
            },
        ),
        migrations.CreateModel(
            name='Prices',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(default='Серый', max_length=100)),
                ('noDepthPrice', models.FloatField(blank=True, null=True, verbose_name='Если здесь указана цена, таблица работать не будет')),
                ('oldPrice', models.IntegerField(blank=True, null=True)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.ProductCard')),
            ],
            options={
                'verbose_name': 'Цену',
                'verbose_name_plural': 'Цены',
            },
        ),
        migrations.CreateModel(
            name='Photos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', versatileimagefield.fields.VersatileImageField(blank=True, upload_to='', verbose_name='Photo')),
                ('ppoi', versatileimagefield.fields.PPOIField(default='0.5x0.5', editable=False, max_length=20)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.ProductCard')),
            ],
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, null=True)),
                ('body', models.TextField(max_length=500, null=True)),
                ('changed', models.DateTimeField(auto_now=True)),
                ('created', models.DateField(auto_now_add=True)),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.ProductCard')),
            ],
            options={
                'ordering': ['-changed'],
            },
        ),
        migrations.CreateModel(
            name='ExpositionPhotos',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=150, null=True)),
                ('photo', versatileimagefield.fields.VersatileImageField(blank=True, upload_to='', verbose_name='Photo')),
                ('ppoi', versatileimagefield.fields.PPOIField(default='0.5x0.5', editable=False, max_length=20)),
                ('exposition', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Exposition')),
            ],
        ),
        migrations.CreateModel(
            name='DepthPrice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.FloatField(null=True, verbose_name='Price')),
                ('depth', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Depth')),
                ('prices', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Prices')),
            ],
        ),
        migrations.AddField(
            model_name='article',
            name='page',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Page'),
        ),
    ]
