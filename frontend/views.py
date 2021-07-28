from django.shortcuts import render
import os
import frontend.data as data

# def example(request):
#    return render(request, 'test.html', {} OR data.something)

def index(request):
    return render(request, 'index.html', data.index);