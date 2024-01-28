from django.http import JsonResponse
from .models import MoneyPlant
from.serializers import MPAPISerializer
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status


def allocations( riskTollerance):
    pass


@api_view(['GET', 'POST'])
def portfolio_list(request, format=None):
    
    if request.method == 'GET': 
        portfolios = MoneyPlant.objects.all()
        serializer = MPAPISerializer(portfolios, many=True)
        return Response({"Portfolios": serializer.data})
    if request.method == 'POST':


        serializer = MPAPISerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])     
def portfolio_detail(request, id, format=None):
    try:
        portfolio = MoneyPlant.objects.get(id=id)
    except MoneyPlant.DoesNotExist:
        return Response({'message': 'The portfolio does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = MPAPISerializer(portfolio)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = MPAPISerializer(portfolio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        portfolio.delete()
        return Response({'message': 'Portfolio was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
        