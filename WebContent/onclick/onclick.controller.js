sap.ui.controller("onclick.onclick", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf onclick.onclick
	 */
	onInit : function() {

		var oModel = new sap.ui.model.json.JSONModel(); 
		sap.ui.getCore().setModel(oModel, "model");
		this.loadingData();
		var data=oModel.getData(); 
		//console.log(data.users);
		var oModelU= new sap.ui.model.json.JSONModel();
		sap.ui.getCore().setModel(oModelU, "modelUsers");
		var dataUsers=data.users; // we create a data who will contains jus the array of users
		oModelU.setData(dataUsers);
		console.log(dataUsers);
		var listModel = new sap.ui.model.json.JSONModel(); 
		sap.ui.getCore().setModel(listModel,"listOfReaders");
		var listBooks= new sap.ui.model.json.JSONModel();
		sap.ui.getCore().setModel(listBooks,"listOfBooks");
	},

	loadingData : function() {
		var oModel = sap.ui.getCore().getModel("model");
		var i;
		var sUrl = "http://localhost:5000/library";
		var oModel = sap.ui.getCore().getModel("model");

		jQuery
				.ajax({
					type : "GET",
					contentType : "application/json",
					url : sUrl,
					dataType : "json",
					async : false,
					success : function(aResults) {
						// Success

						for (i = 0; i < aResults.length; i++) {
							if (typeof (aResults[i].events) === "string") {
								aResults[i].events = JSON
										.parse(aResults[i].events);
							}
						}
						var oModelData =  aResults; //contains all dates about library like id, name and users
						
						oModel.setData(oModelData);
						console.log(aResults);
					},
					error : function() {
						// Error
						// Afisare eroare
						console.log("Error");
					}
				})

	},
	appBack: function() {
		app.to("identry");
	},
	goToPage : function(oEvent) {
		
		var oModel = sap.ui.getCore().getModel("modelUsers");
		var dataUsers=oModel.getData();
		var nameUser = sap.ui.getCore().byId("inputUser").getValue();
		var passUser = sap.ui.getCore().byId("passUser").getValue();
		var listModel =  sap.ui.getCore().getModel("listOfReaders"); 
		var listOfReaders={"users":[]};
		var listModel2= sap.ui.getCore().getModel("listOfBooks");
		var listOfBooks={"books":[]};
		var helloAdmin = sap.ui.getCore().byId("nameAdmin");
		var helloReader = sap.ui.getCore().byId("nameReader");
		
		if (nameUser == "" || passUser == "") {
			var wMessage = sap.ui.getCore().byId("wMessage");
			wMessage.open();

		} else {
			for(var i=0;i<dataUsers.length;i++){
				if(nameUser ==dataUsers[i].name &&  passUser !=dataUsers[i].password){
					var wMessage = sap.ui.getCore().byId("wMessage");
					wMessage.destroyContent();
					wMessage.addContent(new sap.m.Text({
						text : "Password incorect"}));
					wMessage.open();
				}else
				if (nameUser == dataUsers[i].name && passUser ==dataUsers[i].password && dataUsers[i].role=="admin"  ) {
				helloAdmin.setText(nameUser);
			
				for(var z=0;z<dataUsers.length;z++){
					if(nameUser != dataUsers[z].name && dataUsers[z].role!="admin"  ){
						listOfReaders.users.push(dataUsers[z]);
					
					}
				}
				listModel.setData(listOfReaders);
				console.log(listOfReaders);
				app.to("idadmin");
			} else if(nameUser == dataUsers[i].name  && passUser ==dataUsers[i].password && dataUsers[i].role=="reader" ){
				var adminName = sap.ui.getCore().byId("nameUser");
				for(var z=0;z<dataUsers[i].books.length;z++){
				listOfBooks.books.push(dataUsers[i].books[z]);
				}
				listModel2.setData(listOfBooks);
				console.log(listOfBooks);
				helloReader.setText(nameUser);
				app.to("idreader");
			}
			}
		
		}

	},
	goToPageReset:function(oEvent){
		app.to("idreset");
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
