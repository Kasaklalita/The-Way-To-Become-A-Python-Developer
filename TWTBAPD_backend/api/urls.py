from django.urls import path
from .views import *

urlpatterns = [
    path('categories/', GetAllCategories.as_view()),
    path('categories/<slug:category_slug>', GetQuestionsByCategory.as_view()),
    path('questions/', GetAllQuestions.as_view()),
    path('questions/<int:id>', GetQuestionDetail.as_view())
]
