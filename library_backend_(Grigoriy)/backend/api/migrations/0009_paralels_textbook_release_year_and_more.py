# Generated by Django 4.1.4 on 2023-01-11 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_justbook_authors_alter_justbook_pieces_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Paralels',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('main_class', models.PositiveSmallIntegerField(choices=[(7, 7), (8, 8), (9, 9), (10, 10), (11, 11)])),
                ('paralel_numbers', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='textbook',
            name='release_year',
            field=models.DateField(blank=True, default=None),
        ),
        migrations.AlterField(
            model_name='textbook',
            name='authors',
            field=models.ManyToManyField(blank=True, related_name='text_books', to='api.author'),
        ),
    ]
