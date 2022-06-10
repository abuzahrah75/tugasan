from django.urls import path
from .views import *
from .views_htmx import *

urlpatterns = [
    path('', index, name="tugasan-index"),
    path('add_tugas/', add_tugas, name="tugasan-add"),
    # path('')

]

htmx_urlpatterns =[
    path('detail/<int:pk>', pop_detail, name='tugasan-pop-detail'),
    path('edit/<int:pk>', pop_edit, name='tugasan-pop-edit'),
    path('delete/<int:pk>', pop_delete, name='tugasan-pop-delete'),
    path('delete-confirm/<int:pk>', pop_delete_confirm, name='tugasan-delete-confirm'),
    path('empty', return_kosong, name="return-empty"),
]

urlpatterns += htmx_urlpatterns
