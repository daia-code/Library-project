sap.ui.controller("onclick.admin", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf onclick.admin
	 */
	onInit : function() {
		 var oModel3 = new sap.ui.model.json.JSONModel();

			sap.ui.getCore().setModel(oModel3, "table2");

	},
	message : function(oEvt) {

		var sClickedData = oEvt.getSource().getTitle();
		var oModel2 = sap.ui.getCore().getModel("model");
		var oData2 = oModel2.getData();
		oData2=oData2.users;
		
		var oModel3 = sap.ui.getCore().getModel("table2");
		var oNewData = [];
		var ok = 0;
	
		for (var i = 0; i < oData2['length']; i++) {
			if (oData2[i].name === sClickedData) {
				console.log(oData2[i].name);
			for (var j = 0; j < oData2[i].books['length']; j++) {
		        console.log(oData2[i].books)
				oNewData.push(oData2[i].books[j]);
			}
		
	

		}
		oModel3.setData(oNewData);
		
	}
	},
	openSettingsDialog : function(oEvent) {
		var dialog = sap.ui.getCore().byId("settingsDialog");
		dialog.open();
	},
	openInfoLibrary : function(oEvent) {
		var dialog = sap.ui.getCore().byId("infoAdmin");
		dialog.open();
	},
	appBack : function() {
		var adminName = sap.ui.getCore().byId("inputUser");
		adminName.setValue("");
		var pass = sap.ui.getCore().byId("passUser");
		pass.setValue("");
		app.back();
	},
	createAccount : function() {
		var dialog = sap.ui.getCore().byId("createDialog");
		dialog.open();
	},
	onPressCreateDataAccount : function() {
		var oModel3 = sap.ui.getCore().getModel("listOfReaders");
		var oData = oModel3.getData();
		var nume = sap.ui.getCore().byId("idNewName").getValue();
		var emailul = sap.ui.getCore().byId("idEmail").getValue();
		var pass = sap.ui.getCore().byId("idPassword").getValue();
		var adresa = sap.ui.getCore().byId("idAddress").getValue();
		var dialog = sap.ui.getCore().byId("createDialog");
		var eroare = sap.ui.getCore().byId("eroareDialog");
		var books = [];
		var sUrl = "http://localhost:5000/users";
		if (nume && emailul && pass && adresa) {
			var oDataToCreate = {
				name : nume,
				books : JSON.stringify(books),
				email : emailul,
				password : pass,
				address : adresa,
				role : "reader",
				library : JSON.stringify({
					"id" : 1,
					"name" : "On Click"
				}),
			};

			jQuery.ajax({
				type : "POST",
				url : sUrl,
				data : $.param(oDataToCreate),
				contentType : 'application/x-www-form-urlencoded',
				success : function() {
					console.log("POST SUCCESS");
					oData.users.push(oDataToCreate);
					oModel3.setData(oData);
					dialog.close();
				}.bind(this),
				error : function(oError) {
					console.log("ERROR POST");
				}
			});
		} else {
			eroare.open();
		}
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
