from django_filters.rest_framework import FilterSet
from .models import Machine, Maintenance, Claim, UserSilant


class MachineFilter(FilterSet):
    class Meta:
        model = Machine
        fields = {'serNumM': ['icontains'], 'modelM__title': ['exact'], 'modelE__title': ['exact'],
                  'modelT__title': ['exact'], 'modelDA__title': ['exact'], 'modelSA__title': ['exact']}


class MaintenanceFilter(FilterSet):
    class Meta:
        model = Maintenance
        fields = {'machine__serNumM': ['icontains'], 'type__title': ['exact'], 'serviceCompany__title': ['exact']}


class ClaimFilter(FilterSet):
    class Meta:
        model = Claim
        fields = {'machine__serNumM': ['icontains'], 'typeFailure__title': ['exact'], 'recMethod__title': ['exact'],
                  'machine__userService__title': ['exact']}





#
#
# class ServiceCompanyFilter(FilterSet):
#
#     class Meta:
#         model = Machine
#         fields = {'serNumM': ['icontains'], 'modelM__title': ['exact'], 'modelE__title': ['exact'],
#                   'modelT__title': ['exact'], 'modelDA__title': ['exact'], 'modelSA__title': ['exact']}