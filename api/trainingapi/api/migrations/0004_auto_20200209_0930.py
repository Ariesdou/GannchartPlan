# Generated by Django 3.0.3 on 2020-02-09 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200209_0923'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='end',
            field=models.DateTimeField(default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='course',
            name='start',
            field=models.DateTimeField(default=None),
            preserve_default=False,
        ),
    ]
