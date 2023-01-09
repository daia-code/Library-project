sap.ui.jsview("onclick.reset", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf onclick.reset
	*/ 
	getControllerName : function() {
		return "onclick.reset";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf onclick.reset
	*/ 
	createContent : function(oController) {
	
		var inputName= new sap.m.Input("rUser",{
			placeholder:"User"
		});
		var email= new sap.m.Input("rEmail",{
			placeholder:"Email"
		});
		var password= new sap.m.Input("nPass",{
			placeholder:"new password"
		});
		var resetBtn = new sap.m.Button({
			text:"Reset"
		}).addStyleClass("resetBtn");
		
		var firstLayout=new sap.m.VBox({
			items:[
			         inputName,
			         email,
			         password,
			         resetBtn]
		}).addStyleClass("resetAccount1");
		var image = new sap.m.Image({
			src : "onclick/image/reset.jpg"
		}).addStyleClass("imageStyle3");
		var imgLayout=new sap.m.VBox({
			items:[image]
		}).addStyleClass("imgLayout");
		var lastLayout=new sap.m.HBox({
			items:[
                     imgLayout,
			         firstLayout
			         ]
		}).addStyleClass("resetAccount2");
 		var oPage= new sap.m.Page({
			title: "Reset account",
			showNavButton:true,
			navButtonPress:function(){
				app.back();
			},
			content: [
			          lastLayout
			
			]
		});
 		return oPage;
	}

});