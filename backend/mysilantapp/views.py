from rest_framework import filters
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication
from . import serializers
from .filters import MachineFilter, MaintenanceFilter, ClaimFilter
from .models import *
from .serializers import MaintenanceSerializer, ClaimSerializer


class UserCroupView(ListAPIView):
    serializer_class = serializers.UserSilantSerializer
    queryset = UserSilant.objects.all()
    permission_classes = (AllowAny,)
    filter_backends = [filters.SearchFilter]
    search_fields = ['silUser__username']
    authentication_classes = (TokenAuthentication,)


class MachineAPIViewPublic(ListAPIView):
    serializer_class = serializers.MachinePublicSerializer
    queryset = Machine.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['serNumM']


class MachineAPIView(ListCreateAPIView):
    serializer_class = serializers.MachineSerializer
    queryset = Machine.objects.all().order_by('-dateShipmentFactory')
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)
    filterset_class = MachineFilter

    ordering = ['dateShipmentFactory']
    ordering_fields = ['dateShipmentFactory']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filter'] = MachineFilter(self.request.GET, queryset=self.get_queryset())
        return context

    def get_queryset(self):
        user = self.request.user
        if UserSilant.objects.get(silUser=user).categoryType == "MG":
            return Machine.objects.all().order_by('-dateShipmentFactory')
        if UserSilant.objects.get(silUser=user).categoryType == "CL":
            return Machine.objects.filter(userClient=UserSilant.objects.get(silUser=user)).\
                order_by('-dateShipmentFactory')
        if UserSilant.objects.get(silUser=user).categoryType == "SK":
            return Machine.objects.filter(userService=ServiceCompany.objects.get(user=UserSilant.objects.get
                                                                 (silUser=user))).order_by('-dateShipmentFactory')


class MachineAPIViewDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.MachineSerializer
    queryset = Machine.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)


class MaintenanceAPIView(ListCreateAPIView):
    serializer_class = serializers.MaintenanceSerializer
    queryset = Maintenance.objects.all().order_by('-date')
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)
    filterset_class = MaintenanceFilter
    ordering = ['date']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['filter'] = MaintenanceFilter(self.request.GET, queryset=self.get_queryset())
        return context

    def get_queryset(self):
        user = self.request.user
        if UserSilant.objects.get(silUser=user).categoryType == "MG":
            return Maintenance.objects.all().order_by('-date')
        if UserSilant.objects.get(silUser=user).categoryType == "CL":
            return Maintenance.objects.filter(
                machine=Machine.objects.filter(userClient=UserSilant.objects.get(silUser=user))).order_by('-date')
        if UserSilant.objects.get(silUser=user).categoryType == "SK":
            return Maintenance.objects.filter(machine=Machine.objects.filter(
                userService=ServiceCompany.objects.get(user=UserSilant.objects.get(silUser=user)))).order_by('-date')


class MaintenanceAPIViewDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = MaintenanceSerializer
    queryset = Maintenance.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)


class ClaimAPIView(ListCreateAPIView):
    serializer_class = ClaimSerializer
    queryset = Claim.objects.all().order_by('-dateRejection')
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)
    filterset_class = ClaimFilter
    search_fields = ['dateRejection', 'operTime', 'typefailure_title', 'failDescription', 'recmethode_title',
                     'spareParts', 'dateRecovery', 'downtime', 'machine_title']
    ordering = ['dateRejection']

    def get_queryset(self):
        user = self.request.user
        if UserSilant.objects.get(silUser=user).categoryType == "MG":
            return Claim.objects.all().order_by('-dateRejection')
        if UserSilant.objects.get(silUser=user).categoryType == "CL":
            return Claim.objects.filter(machine=Machine.objects.filter(userClient=UserSilant.objects.
                                                                       get(silUser=user))).order_by('-dateRejection')
        if UserSilant.objects.get(silUser=user).categoryType == "SK":
            return Claim.objects.filter(machine=Machine.objects.filter(
                userService=ServiceCompany.objects.get(user=UserSilant.objects.get(silUser=user)))).\
                order_by('-dateRejection')


class ClaimAPIViewDetail(RetrieveUpdateDestroyAPIView):
    serializer_class = ClaimSerializer
    queryset = Claim.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)


class ReferenceBookAPIView:
    permission_classes = (IsAuthenticated,)
    authentication_classes = (TokenAuthentication,)

    class Meta:
        abstract = True

class ModelMachineAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelMachineSerializer
    queryset = ModelMachine.objects.all()


class ModelMachineDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelMachineSerializer
    queryset = ModelMachine.objects.all()


class ModelEngineAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelEngineSerializer
    queryset = ModelEngine.objects.all()


class ModelEngineDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelEngineSerializer
    queryset = ModelEngine.objects.all()


class ModelTransmissionAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelTransmissionSerializer
    queryset = ModelTransmission.objects.all()


class ModelTransmissionDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelTransmissionSerializer
    queryset = ModelTransmission.objects.all()


class ModelDriveAxleAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelDriveAxleSerializer
    queryset = ModelDriveAxle.objects.all()


class ModelDriveAxleDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelDriveAxleSerializer
    queryset = ModelDriveAxle.objects.all()


class ModelSteeringAxleAPIView(ListCreateAPIView):
    serializer_class = serializers.ModelSteeringAxleSerializer
    queryset = ModelSteeringAxle.objects.all()


class ModelSteeringAxleDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ModelSteeringAxleSerializer
    queryset = ModelSteeringAxle.objects.all()


class ServiceCompanyAPIView(ListCreateAPIView):
    serializer_class = serializers.ServiceCompanySerializer
    queryset = ServiceCompany.objects.all()


class ServiceCompanyDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ServiceCompanySerializer
    queryset = ServiceCompany.objects.all()


class TypeMaintenanceAPIView(ListCreateAPIView):
    serializer_class = serializers.TypeMaintenanceSerializer
    queryset = TypeMaintenance.objects.all()


class TypeMaintenanceDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.TypeMaintenanceSerializer
    queryset = TypeMaintenance.objects.all()


class TypeFailureAPIView(ListCreateAPIView):
    serializer_class = serializers.TypeFailureSerializer
    queryset = TypeFailure.objects.all()


class TypeFailureDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.TypeFailureSerializer
    queryset = TypeFailure.objects.all()


class RecoveryMethodAPIView(ListCreateAPIView):
    serializer_class = serializers.RecoveryMethodSerializer
    queryset = RecoveryMethod.objects.all()


class RecoveryMethodDetailAPIView(RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.RecoveryMethodSerializer
    queryset = RecoveryMethod.objects.all()
