# models is just another name for database
from django.db import models

class Customer(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.CharField(max_length=200, null=True)

class Portfolio(models.Model):
    name = models.CharField(max_length=200, null=True)
    symbol = models.CharField(max_length=200, null=True)
    quantity = models.IntegerField(null=True)
    price = models.FloatField(null=True)
    date = models.DateTimeField(auto_now_add=True)
    