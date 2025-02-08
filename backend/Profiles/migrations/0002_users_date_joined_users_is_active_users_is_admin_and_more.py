# Generated by Django 5.1.6 on 2025-02-08 03:13

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Profiles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='date_joined',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='users',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='users',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='users',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True, verbose_name='last login'),
        ),
        migrations.AlterField(
            model_name='users',
            name='username',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
