# Generated by Django 4.2.4 on 2023-09-24 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patients', '0002_patient_pain_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='visit_reason',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
