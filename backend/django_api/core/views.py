from rest_framework import viewsets
from .models import Project, Task
from .serializers import ProjectSerializer, TaskSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.exceptions import PermissionDenied  # ✅ ligne à ajouter

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:  # lecture libre
            return [AllowAny()]
        return [IsAuthenticated()]  # édition = connexion obligatoire

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()  # ✅ ligne nécessaire pour DRF
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(project__owner=self.request.user)

    def perform_create(self, serializer):
        project = serializer.validated_data.get('project')
        if project.owner != self.request.user:
            raise PermissionDenied("Tu ne peux créer de tâche que dans tes propres projets.")
        serializer.save()
