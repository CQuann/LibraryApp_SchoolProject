# Generated by Django 4.1.4 on 2023-02-14 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_student_take_dates'),
    ]

    operations = [
        migrations.AlterField(
            model_name='justbook',
            name='description',
            field=models.TextField(blank=True, default='', max_length=1000),
        ),
    ]
