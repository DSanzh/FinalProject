from django.conf.urls import url
from .views import GetByLanguage, GetByTitle, GetById

urlpatterns = [
    url(r'^words/(?P<language>\w+)/$', GetByLanguage.as_view(), name="word_list"),
    url(r'^words/(?P<language>\w+)/title__startswith=(?P<symbol>\w+)/$', GetByTitle.as_view(), name="get_by_title"),
    url(r'^words/(?P<language>\w+)/(?P<pk>\d+)/$', GetById.as_view(), name="get_by_id"),
]
