# Generated by Django 4.2.4 on 2023-08-27 05:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('patients', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Queue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='QueueEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('joined_at', models.DateTimeField(auto_now_add=True)),
                ('position', models.PositiveIntegerField()),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='patients.patient')),
                ('queue', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='queues.queue')),
            ],
            options={
                'ordering': ['position'],
            },
        ),
        migrations.AddField(
            model_name='queue',
            name='patients',
            field=models.ManyToManyField(through='queues.QueueEntry', to='patients.patient'),
        ),
    ]
