# Generated by Django 5.1.5 on 2025-02-06 06:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Profiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Conversations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('private', 'Private'), ('group', 'Group')], default='Private', max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Conversation_Members',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profiles.users')),
                ('conversation_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Conversations.conversations')),
            ],
        ),
        migrations.CreateModel(
            name='Messages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.CharField(max_length=255)),
                ('conversation_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Conversations.conversations')),
                ('sender_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Profiles.users')),
            ],
        ),
    ]
