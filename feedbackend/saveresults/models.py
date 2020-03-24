from django.db import models

class UserFeedback1(models.Model):
    email = models.CharField(max_length = 50)
    ans1 = models.CharField(max_length = 2)
    ans2 = models.CharField(max_length = 2)
    ans3 = models.CharField(max_length = 2)
    ans4 = models.CharField(max_length = 2)
    ans5 = models.CharField(max_length = 2)
    feedback = models.CharField(max_length = 200)