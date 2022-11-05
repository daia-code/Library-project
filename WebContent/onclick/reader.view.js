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
		var oLabelUser = new sap.m.Label("nameReader")
				.addStyleClass("userWelcome");
		var libraryLocal=new sap.m.Button({
			icon:"sap-icon://functional-location",
			press : [ oController.openInfoLibrary, oController ]
		}).addStyleClass("libraryLocal");
		var settingsBtn=new sap.m.Button({
			icon:"sap-icon://account",
			press:[oController.openSettingsDialog,oController]
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
		var dialogSettings=new sap.m.Dialog("settingsDialogReader",{
			title:"Settings account",
			content:[
			         new sap.m.Button({
			        	 text:"Close",
			        	 type: sap.m.ButtonType.Emphasized,
			        	 press:function(){
			        		 dialogSettings.close();
			        	 }
			        	
			         })]
		});
		var dialogLibrary = new sap.m.Dialog("infoUser", {
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
		var booksList = new sap.m.List({
			headerText : "Books:"
		});
		var bookBox = new sap.ui.table.Table({
			title : "History of books"

		}).addStyleClass("historyR");
		var spliter = new sap.ui.layout.Splitter({
			contentAreas : [ booksList, bookBox ]
		});
		var oPage = new sap.m.Page({
			title : "My history reading",
			showNavButton : true,
			navButtonPress : [oController.appBack,oController],
			content : [ oLabel, oLabelUser,libraryLocal, settingsBtn, logOut,spliter

			]
		});
		return oPage;
	}

});
