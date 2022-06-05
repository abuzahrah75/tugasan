from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name="tugasan-index"),
    path('add_tugas/', add_tugas, name="tugasan-add"),

]
