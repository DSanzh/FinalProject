from __future__ import unicode_literals

from django.db import models


class Word(models.Model):
    LANGUAGES = (
        ('en', 'English'),
        ('kk', 'Kazakh'),
        ('ru', 'Russian'))

    title = models.CharField(max_length=80)
    definition = models.TextField()
    language = models.CharField(max_length=5, choices=LANGUAGES)
    translation = models.ManyToManyField('self', blank=True)
    synonyms = models.ManyToManyField('self', blank=True)
    antonyms = models.ManyToManyField('self', blank=True)

    def __unicode__(self):
        return self.title
