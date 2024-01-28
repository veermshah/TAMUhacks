from django.http import JsonResponse
from .models import MoneyPlant
from.serializers import MPAPISerializer
from rest_framework.decorators import api_view 


@api_view(['GET', 'POST'])
def portfolio_list(request):
    # Get all the attributes in a portfolio
    # Serialize them
    # Return them as a JSON response
    portfolios = MoneyPlant.objects.all()
    serializer = MPAPISerializer(portfolios, many=True)
    return JsonResponse(serializer.data, safe=False)