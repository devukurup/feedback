from rest_framework import serializers
from saveresults.models import UserFeedback1


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFeedback1
        fields = '__all__'