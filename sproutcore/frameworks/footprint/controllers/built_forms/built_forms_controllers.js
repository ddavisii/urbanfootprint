/*
 * UrbanFootprint v1.5
 * Copyright (C) 2017 Calthorpe Analytics
 *
 * This file is part of UrbanFootprint version 1.5
 *
 * UrbanFootprint is distributed under the terms of the GNU General
 * Public License version 3, as published by the Free Software Foundation. This
 * code is distributed WITHOUT ANY WARRANTY, without implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
 * Public License v3 for more details; see <http://www.gnu.org/licenses/>.
 */

sc_require('controllers/controllers');
sc_require('controllers/sets_controllers');

Footprint.builtFormTagsController = Footprint.ArrayController.create(Footprint.ArrayContentSupport);

/***
 * This just stores the current editing built form recordType in its content
 */
Footprint.builtFormEditRecordTypeController = SC.ObjectController.create();
