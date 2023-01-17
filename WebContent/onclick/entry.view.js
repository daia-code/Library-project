sap.ui.jsview("onclick.entry", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf onclick.entry
	*/ 
	getControllerName : function() {
		return "onclick.entry";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf onclick.entry
	*/ 
	createContent : function(oController) {

		 var oTile1=new sap.m.StandardTile( {
	    	   title:" SAP UI 5",
	    	   info:"Library app",
	           icon:"sap-icon://sap-ui5"});
		 var oTile2=new sap.m.StandardTile(   {
		    	title:"Home",
			    icon:"sap-icon://home",
			    press : [ oController.goToHome, oController ]});
		 var oTile3=new sap.m.StandardTile("gotoClick",{   
		    	title:"Account",
			    icon:"sap-icon://account",
			    press : [ oController.goToNextPage, oController ]
			    });
			    
		 
		var oTileCont= new sap.m.TileContainer({
			tiles:[
			       oTile1,
			       oTile2,
			       oTile3
			       ]
		});
		
			  
			     
		
 		var page= new sap.m.Page({
			title: "OnClick",
			content: [
			
			oTileCont
			]
		});
 		return page;
	}

});