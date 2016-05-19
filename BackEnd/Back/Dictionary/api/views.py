from rest_framework.generics import ListAPIView
from ..models import Word
from .serializers import ShortSerializer, DetailedSerializer


class GetByLanguage(ListAPIView):
    serializer_class = ShortSerializer

    def get_queryset(self):
        if self.request.method == 'GET':
            language = self.kwargs.get("language")
            array = Word.objects.filter(language=language)
            return sorted(array)


class GetByTitle(ListAPIView):
    serializer_class = DetailedSerializer

    def get_queryset(self):
        if self.request.method == 'GET':
            language = self.kwargs.get("language")
            symbol = self.kwargs.get("symbol")
            array = Word.objects.filter(language=language).filter(title__startswith=symbol)
            return sorted(array)


class GetById(ListAPIView):
    serializer_class = DetailedSerializer

    def get_queryset(self):
        if self.request.method == 'GET':
            language = self.kwargs.get("language")
            pk = self.kwargs.get("pk")
            array = Word.objects.filter(language=language).filter(pk=pk)
            return sorted(array)
