# Generated by Django 4.1.4 on 2023-01-11 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_paralels_textbook_release_year_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='textbook',
            name='authors',
            field=models.ManyToManyField(blank=True, to='api.author'),
        ),
    ]
