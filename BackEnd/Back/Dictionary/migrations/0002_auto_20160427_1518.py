# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-27 15:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Dictionary', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='word',
            name='language',
            field=models.CharField(choices=[('en', 'English'), ('kk', 'Kazakh'), ('ru', 'Russian')], max_length=5),
        ),
    ]
