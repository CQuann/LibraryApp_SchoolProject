# Generated by Django 4.1.4 on 2023-02-11 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_textbook_release_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='textbook',
            name='amount',
            field=models.PositiveIntegerField(default=0, verbose_name='Количество учебников'),
        ),
    ]
