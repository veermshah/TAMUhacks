from django.db import models

class MoneyPlant(models.Model):
    name = models.CharField(max_length=100, default="name")
    CommunicationServices = models.CharField(max_length=100)
    ConsumerDiscretionary = models.CharField(max_length=100)
    ConsumerStaples = models.CharField(max_length=100)
    Energy = models.CharField(max_length=100)
    Financials = models.CharField(max_length=100)
    HealthCare = models.CharField(max_length=100)
    Industrials = models.CharField(max_length=100)
    InformationTechnology = models.CharField(max_length=100)
    Materials = models.CharField(max_length=100)
    RealEstate = models.CharField(max_length=100)
    Utilities = models.CharField(max_length=100)

    def __str__(self):
        return self.name