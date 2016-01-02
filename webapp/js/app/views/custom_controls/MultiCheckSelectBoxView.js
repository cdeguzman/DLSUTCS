/**
	MultiCheckSelectBoxView.js
*/
define(['jquery', 'backbone', 'jscookie'], function($, Backbone, Cookie){
	
	var MultiCheckSelectBoxView = Backbone.View.extend({
	
		templateName: 'custom_controls/MultiCheckSelectBoxTemplate',
		
		selected: [],
	
		events:{
			'click .dropdown-menu a' : "toggleCollumn",
			'click .dropdown-menu input[type="checkbox"]' : "checkToggle"
		},
	
		initialize: function(options){
			this.selection = options.selection;
			this.dataTable = options.dataTable;
			this.selected = options.selected;
			this.render();
		},
		
		render: function(){
			var template = _.template(Core.templates[this.templateName]);
			var self = this;
			this.$el.prepend(template({"selection":this.selection, "showResetButton": _.findWhere(this.selection, {visible: false})}));
		},
			
		toggleCollumn: function(event, checkbox){
			var self = this;
			var $target = $( event.currentTarget );
	        var val = parseInt($target.attr( 'data-value' ));
	        var inp = $target.find('input');
	        var idx = this.selected.indexOf(val);
			var isChecked = true;
			var columnVisibility = unescape(Cookie.get("patientColumnsVisibility")).split(",");
		    if(val===-1){
		    	//Reset to default
				this.selected = [];
				_.each(this.dataTable.api().columns()[0], function(col, idx){
					if($('a[data-value="'+idx+'"] input[type="checkbox"]')[0]){
						//Check and remember all boxes
						$('a[data-value="'+idx+'"] input[type="checkbox"]')[0].checked = true;
						self.selected.push(idx);
						//Remove responsive control classes and make column visible
						columnVisibility[idx] = "true";
						$(self.dataTable.api().column(parseInt(idx)).header()).removeClass("never");
					}
				});
		    }else{
				//Toggle Collumns
			    if ( idx > -1 ) {
			       this.selected.splice( idx, 1 );
			       if(checkbox){
					   $('input[data-value="'+val+'"]').prop("checked", false);
			       }else{
			       	   inp.prop( 'checked', false )
			       }
				   isChecked = false;
			    } else {
			       this.selected.push( val );
			       if(checkbox){
			       		$('input[data-value="'+val+'"]').prop("checked", true);
			       }else{
			       		inp.prop( 'checked', true );
			       }
			    }
		    	$( event.target ).blur();
				columnVisibility[parseInt(val)] = isChecked;
				if(isChecked){
					// Remove hidden class
					$(this.dataTable.api().column(parseInt(val)).header()).removeClass("never");
				}else{
					//Add hidden class
					$(this.dataTable.api().column(parseInt(val)).header()).addClass("never");
				}
				this.dataTable.api().column(parseInt(val)).visible(isChecked);
		    }
			//Refresh the datable
			this.dataTable.api().responsive.rebuild();
			this.dataTable.api().responsive.recalc();
			//Save the setting
			Cookie.set("patientColumnsVisibility", escape(columnVisibility.join(',')));
			if(this.selected.length!==$('a input[type="checkbox"]').length){
				//show reset
				if(!$(".revertColumnsContainer").length){
					$(".multiCheckSelect ul.dropdown-menu").prepend('<li class="revertColumnsContainer"><a href="#" data-value="-1" tabIndex="-1" id="revertColumns"><div class="checkbox option"><label><i>revert to default</i></label></div></a></li>');
				}
			}else{
				//hide reset
				$(".revertColumnsContainer").remove();
			}
	    	return false;
		},
		
		checkToggle: function(e){
			e.stopPropagation();
			this.toggleCollumn(e, true);
		}
	
	});
	
	return MultiCheckSelectBoxView;
	
});