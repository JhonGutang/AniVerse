# Generated by Django 5.1.4 on 2025-02-21 08:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Profiles', '0006_rename_profile_picture_users_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='year_level',
            field=models.IntegerField(blank=True, max_length=64, null=True),
        ),
    ]
