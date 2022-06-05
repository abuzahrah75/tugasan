from django.shortcuts import render
from django.views.decorators.http import require_http_methods

from core.todo import todos
from .models import Tugasan

# Create your views here.
def index(request):
    tugasan = Tugasan.objects.all().order_by('-id')
    return render(request, 'tugasan/index.html', {'tugas': tugasan})
    # return render(request, 'tugasan/index.html')

@require_http_methods(['POST'])
def add_tugas(request):
    tugas = None
    mytugas = request.POST.get('nama','')
    if mytugas:
        tugas = Tugasan.objects.create(nama=mytugas, st_tugas='1')

    return render(request, 'tugasan/partials/tugasan.html', {'tugas': tugas})