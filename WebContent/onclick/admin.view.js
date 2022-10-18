sap.ui.jsview("onclick.admin", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf onclick.admin
	 */
	getControllerName : function() {
		return "onclick.admin";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf onclick.admin
	 */
	createContent : function(oController) {
		var oLabel = new sap.m.Label({
			text : "Welcome back,"
		}).addStyleClass("textWelcome");
		var oLabelUser = new sap.m.Label("nameAdmin")
				.addStyleClass("userWelcome");
		var logOut = new sap.m.Button({
			icon : "sap-icon://action",

			press : function() {
				var adminName = sap.ui.getCore().byId("inputUser");
				adminName.setValue("");
				app.to("idonclick1");
			}

		}).addStyleClass("logOutBtn");
		var oPage = new sap.m.Page({
			title : "Controll page",
			showNavButton : true,
			navButtonPress : function() {
				var adminName = sap.ui.getCore().byId("inputUser");
				adminName.setValue("");
				app.back();
			},
			content : [ oLabel, oLabelUser, logOut ]
		});
		return oPage
	}

});
