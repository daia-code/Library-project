sap.ui.jsview("onclick.onclick", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf onclick.onclick
	 */
	getControllerName : function() {
		return "onclick.onclick";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf onclick.onclick
	 */
	createContent : function(oController) {
		var title=new sap.m.Label({
			text:"Login page"
		}).addStyleClass("styleTitle");
		var oLabel1 = new sap.m.Input({
			placeholder : "Enter user"
		}).addStyleClass("styleInput");
		var oLabel2 = new sap.m.Input({
			type : "Password",
			placeholder : "Enter password"
		}).addStyleClass("styleInput");
		var image = new sap.m.Image({
			src : "onclick/image/digital.jpg"
		}).addStyleClass("imageStyle");
        var bLog=new sap.m.Button({
        	text:"Login",
        	press:[oController.goToPage,oController]
        }).addStyleClass("buttonL");
        var bNew=new sap.m.Button({
        	text:"Create new account"
        }).addStyleClass("buttonC");
        var buttonBox = new sap.ui.layout.HorizontalLayout({
			content : [ 
			            bLog,
			            bNew ]
		});
		var inputBox = new sap.ui.layout.VerticalLayout({
			content : [ title,
			            oLabel1, 
			            oLabel2,
			           buttonBox]
		}).addStyleClass("styleBox1");
		var contestBox = new sap.ui.layout.HorizontalLayout({
			content : [ 
			            image, 
			            inputBox ]
		});
		var oPage = new sap.m.Page({
			title : "OnClick",
			content : [
			           contestBox ]
		});
		return oPage;
	}

});