# Generated by Django 3.0.3 on 2020-02-09 09:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200209_0913'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='link',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='media',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='skill',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='course',
            name='work',
            field=models.TextField(blank=True),
        ),
    ]
