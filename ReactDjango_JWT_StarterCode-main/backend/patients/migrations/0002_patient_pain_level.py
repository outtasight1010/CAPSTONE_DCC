# Generated by Django 4.2.4 on 2023-09-10 19:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='pain_level',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
