from django.contrib import admin
from mysilantapp.models import Claim, ModelMachine, ModelEngine, ModelTransmission, ModelDriveAxle, ModelSteeringAxle, \
    ServiceCompany, Machine, TypeMaintenance, Maintenance, TypeFailure, RecoveryMethod, UserSilant

admin.site.register(ModelMachine)
admin.site.register(ModelEngine)
admin.site.register(ModelTransmission)
admin.site.register(ModelDriveAxle)
admin.site.register(ModelSteeringAxle)
admin.site.register(ServiceCompany)
admin.site.register(Machine)
admin.site.register(TypeMaintenance)
admin.site.register(Maintenance)
admin.site.register(TypeFailure)
admin.site.register(RecoveryMethod)
admin.site.register(Claim)
admin.site.register(UserSilant)

