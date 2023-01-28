# Generated by Django 4.1.4 on 2023-01-11 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_author_options_alter_justbook_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='justbook',
            name='authors',
            field=models.ManyToManyField(related_name='just_book', to='api.author'),
        ),
        migrations.AlterField(
            model_name='justbook',
            name='pieces',
            field=models.ManyToManyField(related_name='book', to='api.piece'),
        ),
        migrations.AlterField(
            model_name='student',
            name='text_books',
            field=models.ManyToManyField(blank=True, related_name='student', to='api.textbook'),
        ),
        migrations.AlterField(
            model_name='textbook',
            name='authors',
            field=models.ManyToManyField(blank=True, to='api.author'),
        ),
    ]
