# Generated by Django 5.0.1 on 2024-01-27 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MoneyPlant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('CommunicationServices', models.CharField(max_length=100)),
                ('ConsumerDiscretionary', models.CharField(max_length=100)),
                ('ConsumerStaples', models.CharField(max_length=100)),
                ('Energy', models.CharField(max_length=100)),
                ('Financials', models.CharField(max_length=100)),
                ('HealthCare', models.CharField(max_length=100)),
                ('Industrials', models.CharField(max_length=100)),
                ('InformationTechnology', models.CharField(max_length=100)),
                ('Materials', models.CharField(max_length=100)),
                ('RealEstate', models.CharField(max_length=100)),
                ('Utilities', models.CharField(max_length=100)),
            ],
        ),
    ]
