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
		var oModel = sap.ui.getCore().getModel("model"); 
		
		var data=oModel.getData(); 
		var nameLibrary= data.name;
		var idLibrary= data.id;
	var dialogLibrary = new sap.m.Dialog("infoUser", {
		title : "Info",
		content : [ new sap.ui.layout.VerticalLayout({
			content : [ new sap.m.Text({
				text : "Library  "+nameLibrary+idLibrary
			}).addStyleClass("infoName"),new sap.m.Text({
				text : "Schedule"
			}).addStyleClass("infoSchel"), new sap.m.Text({
				text : "OPEN: Monday-Friday: 8 am - 8 pm"
			}).addStyleClass("infoGeneral"), new sap.m.Text({
				text : "OPEN: Saturday: 9 am - 1 pm"
			}).addStyleClass("infoGeneral"), new sap.m.Text({
				text : "CLOSE: Sunday"
			}).addStyleClass("infoGeneral"), new sap.m.Text({
				text : "domain:http://localhost:50000/onclick"
			}).addStyleClass("infoGeneral"), new sap.m.Button({
				text : "Close",
				type : sap.m.ButtonType.Success,
				press : function() {
					dialogLibrary.close();
				}
			}).addStyleClass("infoBtn"), ]
		}),

		]
	});

		var booksList = new sap.m.List({
			headerText : "Books:",
			items:[]
		}).addStyleClass("bookList");
		booksList.bindItems({
			path : "/books",
			template : new sap.m.StandardListItem({
				title : "{title}",
				type : sap.m.ListType.Navigation,
				press : [ oController.message, oController ]
			})

		});
		var listBooks = sap.ui.getCore().getModel("listOfBooks");
		booksList.setModel(listBooks);
		
		var oCol1 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Id"
			})
		});
		var oCol2 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Title"
			}),
		});
		var oCol3 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Code"
			}),
		});

		var oCol4 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Publishing"
			}),
		});
		var oCol5 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Category"
			}),
		});
		var oCol6 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Authors"
			}),
		});
		var oCol7 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Borrow"
			})
		});
		var oCol8 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Return"
			})

		});

		var bookBox = new sap.m.ColumnListItem("tabel", {
			title : "History of books",
			cells : [ new sap.m.Text("nameTabel", {
				text : "{table>id}"
			}), new sap.m.Text("dayTabel", {
				text : "{table>title}"
			}), new sap.m.Text("fromTabel", {
				text : "{table>code}"
			}), new sap.m.Text({
				text : "{table>publishing}"
			}), new sap.m.Text({
				text : "{table>category}"
			}), new sap.m.Text({
				text : "{table>authors/name}"
			}), new sap.m.Text({
				text : "{table>history/borrow}"
			}), new sap.m.Text({
				text : "{table>history/return}"
			}) ]
		});
		var oTable = new sap.m.Table("tableStory", {
			columns : [ oCol1, oCol2, oCol3, oCol4, oCol5, oCol6, oCol7, oCol8

			]

		}).addStyleClass("historyR");

		oTable.bindItems({
			path : "table>/",
			template : bookBox,

		});
		box2 = new sap.m.VBox("boxReader",{
			items : [
           //oTable,
			new sap.m.Image({
				src : 'onclick/image/book.jpg'
			}).addStyleClass("imageStyle2") ]
		});
		var spliter = new sap.ui.layout.Splitter("spliter",{
			contentAreas : [ booksList, box2]
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
