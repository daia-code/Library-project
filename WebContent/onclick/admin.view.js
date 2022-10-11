sap.ui.jsview("onclick.admin", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf onclick.admin
	*/ 
	getControllerName : function() {
		return "onclick.admin";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf onclick.admin
	*/ 
	createContent : function(oController) {
 		var oPage= new sap.m.Page({
			title: "Admin page",
			showNavButton:true,
			navButtonPress : function() {
				app.back();
			},
			content: [
			
			]
		});
 		return oPage
	}

});