from rest_framework import serializers
from .models import Project, Task

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            'id',
            'project',
            'title',
            'description',
            'done',
            'due_date',
            'priority',
            'status',
            'color'
        ]
        read_only_fields = ['id']
