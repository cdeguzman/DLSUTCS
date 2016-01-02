define(['jquery', 'backbone', 'jscookie', 
'../custom_controls/MultiCheckSelectBoxView', 
'dataTables-editable'], 
function($, Backbone, Cookie, MultiCheckSelectBoxView){

var TableView = Backbone.View.extend({

		templateName: 'TableViewTemplate',
		
		subViews: [],

		initialize: function(options){
			var self = this;
			this.tableId = options.tableId;
			this.tableTitle = options.tableTitle;
			this.render();
		},

		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			this.$el.html(template({"data": {"tableId": this.tableId, "tableTitle": this.tableTitle}, "tableData": this.model.getTableData(this.tableId)}));
			var self = this;
			if(App[self.tableId+"dataTable"]){
				App[self.tableId+"dataTable"].fnDestroy();
			}
			$("#"+this.tableId+"_wrapper").show();
			
			

			var columnVisibility = Cookie.get(this.tableId+"ColumnsVisibility") ?  unescape(Cookie.get(this.tableId+"ColumnsVisibility")).split(",") : [];
			if(_.isEmpty(columnVisibility)){
				//If cookie does not exists assume all columns are visible
				_.each($("th"), function(col){
					columnVisibility.push("true");
				});
			}
			var hiddenColumns = _.chain(columnVisibility).map(function(isVisible, idx){
				//Get all hidden columns
				 return {
					 isVisible: isVisible==="true",
					 index: idx
				 }
   			 }).where({isVisible:false}).pluck("index").value();
			 
			
			var columnDefs = [{ 
				className: "never", 
				targets: hiddenColumns
			},
			{
				targets: "_all",
				render: function ( data, type, row ) {
					var tableCellData = data || "&nbsp;";
					return tableCellData;
				}
			}];
			
			
			App[self.tableId+"dataTable"] = $('#'+this.tableId).dataTable({
				iDisplayLength: self.linkView ? App.patientLinkTablePageSize : App.patientTablePageSize,
				dom: 'frt<"bottom"pl><"clear">',
			    columnDefs: columnDefs,
				initComplete: function () {
					//Column Visibility
					if(!self.populationData){
						self.subViews.push(new MultiCheckSelectBoxView({
							el: "#"+self.tableId+"_filter",
							dataTable: this,
							selection: _.chain(this.api().columns().header())
										.filter(function(column){
											return $(column).attr("data-col-button")!=="true";
										})
										.map(function(column, idx){
											columnVisibility[idx] = columnVisibility[idx] === undefined ? true : columnVisibility[idx];
											return {
												colName: $(column).html(),
												visible: columnVisibility[idx]==="true"
											};
										}).value(),
							selected:_.chain(columnVisibility).map(function(isVisible, idx){
										 return {
											 isVisible: isVisible==="true",
											 index: idx
										 }
									 }).where({isVisible:true}).pluck("index").value()
						}));
						Cookie.set(this.tableId+"ColumnsVisibility", escape(columnVisibility.join(',')));
					}
				},
				language: {
					search: '',
					searchPlaceholder: 'search',
					sLengthMenu: 'Show _MENU_ per page',
					paginate: {
						sPrevious: '<i class="fa fa-chevron-left"></i>',
						sNext: '<i class="fa fa-chevron-right"></i>'
					}
		        }
			});
			
			
		},

		cleanUpEvents: function(){

		}
	});

	return TableView;

});