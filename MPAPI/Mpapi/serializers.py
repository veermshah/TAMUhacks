from rest_framework import serializers
from .models import MoneyPlant
class MPAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = MoneyPlant
        fields = ('id', 'name', 'CommunicationServices', 'ConsumerDiscretionary', 'ConsumerStaples', 'Energy', 'Financials', 'HealthCare', 'Industrials', 'InformationTechnology', 'Materials', 'RealEstate', 'Utilities')