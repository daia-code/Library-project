sap.ui.controller("onclick.onclick", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf onclick.onclick
	 */
	// onInit: function() {
	//
	// },
	goToPage : function(oEvent) {
		var nameUser = sap.ui.getCore().byId("inputUser").getValue();
		var passUser = sap.ui.getCore().byId("passUser").getValue();
		if (nameUser == "" || passUser == "") {
			var wMessage = sap.ui.getCore().byId("wMessage");
			wMessage.open();

		} else {
			if (nameUser == "admin" || nameUser == "ADMIN"
					| nameUser == "Admin") {
				var adminName = sap.ui.getCore().byId("nameAdmin");
				adminName.setText(nameUser);
				app.to("idadmin");
			} else {
				var adminName = sap.ui.getCore().byId("nameUser")
				adminName.setText(nameUser);
				app.to("idreader");
			}
		}

	},
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf onclick.onclick
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf onclick.onclick
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf onclick.onclick
 */
// onExit: function() {
//
// }
});
