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
		var libraryLocal = new sap.m.Button({
			icon : "sap-icon://functional-location",
			press : [ oController.openInfoLibrary, oController ]
		}).addStyleClass("libraryLocal");
		var settingsBtn = new sap.m.Button({
			icon : "sap-icon://account",
			press : [ oController.openSettingsDialog, oController ]
		}).addStyleClass("settingsBtn");
		var logOut = new sap.m.Button({
			icon : "sap-icon://action",
			press : function() {
				var adminName = sap.ui.getCore().byId("inputUser");
				adminName.setValue("");
				var pass = sap.ui.getCore().byId("passUser");
				pass.setValue("");
				app.to("idonclick1");
			}

		}).addStyleClass("logOutBtn");
		var readerList = new sap.m.List({
			headerText : "Readers:"
		});

		var readerInfo = new sap.m.StandardListItem({
			title : "Information about reader"

		});
		var readerBook = new sap.ui.table.Table({
			title : "History reading"

		}).addStyleClass("historyR");
		var readerBox = new sap.ui.layout.VerticalLayout({
			content : [ readerInfo, readerBook ]
		})
		var spliter = new sap.ui.layout.Splitter({
			contentAreas : [ readerList, readerBox ]
		});
		var dialogSettings = new sap.m.Dialog("settingsDialog", {
			title : "Settings account",
			content : [ new sap.m.Button({
				text : "Close",
				type : sap.m.ButtonType.Emphasized,
				press : function() {
					dialogSettings.close();
				}

			}) ]
		});
		var dialogLibrary = new sap.m.Dialog("infoAdmin", {
			title : "Info",
			content : [ new sap.ui.layout.VerticalLayout({
				content : [ new sap.m.Text({
					text : "Library OnClick"
				}).addStyleClass("infoName"),
				new sap.m.Text({
					text : "Address: University Street no.1"
				}).addStyleClass("infoGeneral"),
				new sap.m.Text({
					text : "Schedule"
				}).addStyleClass("infoSchel"),
				new sap.m.Text({
					text : "OPEN: Monday-Friday: 8 am - 8 pm"
				}).addStyleClass("infoGeneral"), 
				new sap.m.Text({
					text : "OPEN: Saturday: 9 am - 1 pm"
				}).addStyleClass("infoGeneral"), 
				new sap.m.Text({
					text : "CLOSE: Sunday"
				}).addStyleClass("infoGeneral"),
				new sap.m.Text({
					text : "domain:http://localhost:50000/onclick"
				}).addStyleClass("infoGeneral"),
				new sap.m.Button({
					text : "Close",
					type:sap.m.ButtonType.Success,
					press : function() {
						dialogLibrary.close();
					}
				}).addStyleClass("infoBtn"), ]
			}),

			]
		});
		var oPage = new sap.m.Page({
			title : "Controll page",
			showNavButton : true,
			navButtonPress : [ oController.appBack, oController ],
			content : [ oLabel, oLabelUser, libraryLocal, settingsBtn, logOut,
					spliter ]
		});
		return oPage
	}

});
