from django.contrib import admin
from .models import Course, SiteVisit, LinkClick 

admin.site.register(Course)
admin.site.register(SiteVisit)
admin.site.register(LinkClick)