from django.forms import ModelForm
from .models import Order

class OrderForm (ModelForm):
    class Meta:
        model = Order
        fields ='__all__' #caso o form criado nao pegue todos os itens do modelo deve-se criar uma lista no lugar do dunder all
        


