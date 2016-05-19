from rest_framework.serializers import ModelSerializer, StringRelatedField
from ..models import Word


class ShortSerializer(ModelSerializer):
    class Meta:
        model = Word
        fields = ['id', 'title', 'definition', 'language']


class DetailedSerializer(ModelSerializer):
    synonyms = StringRelatedField(many=True)
    antonyms = StringRelatedField(many=True)
    translation = StringRelatedField(many=True)

    class Meta:
        model = Word
        fields = ['id', 'title', 'definition', 'language', 'translation', 'synonyms', 'antonyms']
        depth = 1
