# Generated by Django 3.0.3 on 2020-02-09 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20200209_0930'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='predecessor',
            field=models.TextField(blank=True),
        ),
    ]
