# coding=utf-8

# UrbanFootprint v1.5
# Copyright (C) 2017 Calthorpe Analytics
#
# This file is part of UrbanFootprint version 1.5
#
# UrbanFootprint is distributed under the terms of the GNU General
# Public License version 3, as published by the Free Software Foundation. This
# code is distributed WITHOUT ANY WARRANTY, without implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
# Public License v3 for more details; see <http://www.gnu.org/licenses/>.


from footprint.main.models.geographies.geography import Geography

__author__ = 'calthorpe_analytics'


class Taz(Geography):
    """
        Represents an authoritative TAZ (transportation area zone), whose pk is referenced by other geospatial tables
    """
    class Meta(object):
        app_label = 'main'

    pass
