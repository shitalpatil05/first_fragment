/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo1/ui5_fragment/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});