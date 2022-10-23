sap.ui.controller("onclick.admin", {

/**
 * Called when a controller is instantiated and its View controls (if available)
 * are already created. Can be used to modify the View before it is displayed,
 * to bind event handlers and do other one-time initialization.
 * 
 * @memberOf onclick.admin
 */
// onInit: function() {
//
// },
	openSettingsDialog:function(oEvent){
		var dialog=sap.ui.getCore().byId("settingsDialog");
		dialog.open();
	},
	openInfoLibrary:function(oEvent){
		var dialog=sap.ui.getCore().byId("infoAdmin");
		dialog.open();
	},
	appBack: function() {
		var adminName = sap.ui.getCore().byId("inputUser");
		adminName.setValue("");
		var pass = sap.ui.getCore().byId("passUser");
		pass.setValue("");
		app.back();
	},
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf onclick.admin
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf onclick.admin
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf onclick.admin
 */
// onExit: function() {
//
// }
});
