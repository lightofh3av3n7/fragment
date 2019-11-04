sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("helpp.help.controller.View1", {
		
		onValueHelp: function (oEvent) {
			var oDialog = new sap.ui.xmlfragment("helpp.help.Fragment.SelectDialog",this);
	this.getView().addDependent(oDialog);
		oDialog.bindAggregation("items",{
			path:"pcgames>/pcgames",
			template:new sap.m.StandardListItem({
			title : "{pcgames>gameName}"
			})
		});
		oDialog.open();	
		},

		onValueHelpOkPress: function (oEvent) {

var Otitle = oEvent.getParameter("selectedItem").getTitle();

		this._oInput = this.getView().byId("gameName");
	     this._oInput.setValue(Otitle);
		}
	});
});