sap.ui.jsview("onclick.reader", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf onclick.reader
	 */
	getControllerName : function() {
		return "onclick.reader";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf onclick.reader
	 */
	createContent : function(oController) {
		var oLabel = new sap.m.Label({
			text : "Welcome ,"
		}).addStyleClass("textWelcome");
		var oLabelUser = new sap.m.Label("nameUser")
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
			title : "My history reading",
			showNavButton : true,
			navButtonPress : function() {
				var adminName = sap.ui.getCore().byId("inputUser");
				adminName.setValue("");
				app.back();
			},
			content : [ oLabel, oLabelUser, logOut

			]
		});
		return oPage;
	}

});
