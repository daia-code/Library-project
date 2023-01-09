sap.ui.controller("onclick.reader", {

/**
 * Called when a controller is instantiated and its View controls (if available)
 * are already created. Can be used to modify the View before it is displayed,
 * to bind event handlers and do other one-time initialization.
 * 
 * @memberOf onclick.reader
 */
 onInit: function() {
	 var oModel3 = new sap.ui.model.json.JSONModel();

		sap.ui.getCore().setModel(oModel3, "table");
 },

	appBack: function() {
		var adminName = sap.ui.getCore().byId("inputUser");
		adminName.setValue("");
		var pass = sap.ui.getCore().byId("passUser");
		pass.setValue("");
		app.back();
	},
	message : function(oEvt) {

		var sClickedData = oEvt.getSource().getTitle();
		var oModel2 = sap.ui.getCore().getModel("listOfBooks");
		var oData2 = oModel2.getData();
		var oModel3 = sap.ui.getCore().getModel("table");
		var oNewData = [];
		var ok = 0;
		for (var i = 0; i < oData2.books['length']; i++) {
			if (oData2["books"][i]["title"] === sClickedData) {
				var box = sap.ui.getCore().byId("boxReader");  
				var table = sap.ui.getCore().byId("tableStory");  
				box.insertItem(table);
				
				oNewData.push(oData2.books[i]);
				
		
				
			}

		}
		oModel3.setData(oNewData);
		console.log(oNewData);

	},
	openInfoLibrary:function(oEvent){
		var dialog=sap.ui.getCore().byId("infoUser");
		dialog.open();
	},
	openSettingsDialog:function(){
		var dialogOpen=sap.ui.getCore().byId("settingsDialogReader");
		dialogOpen.open();
	},
/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf onclick.reader
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf onclick.reader
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf onclick.reader
 */
// onExit: function() {
//
// }
});
