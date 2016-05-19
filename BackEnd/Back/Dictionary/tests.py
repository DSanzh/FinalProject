from django.test import TestCase
from rest_framework import status
from rest_framework.test import APITestCase
class MakeTest(APITestCase):
	def test_get_ru_words(self):
		url = ('http://localhost:8000/api/words/ru/')
		response = self.client.get(url, format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)
	def test_get_en_words(self):
		url = ('http://localhost:8000/api/words/en/')
		response = self.client.get(url, format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)
	def test_get_kk_words(self):
		url = ('http://localhost:8000/api/words/kk/')
		response = self.client.get(url, format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)
	def test_get_kk_words(self):
		url = ('http://localhost:8000/api/words/kk/12')
		response = self.client.get(url, format='json')
		self.assertEqual(response.status_code, status.HTTP_200_OK)