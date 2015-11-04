var easyGood = (function() {

		var testingAPI = {

			OnSearch : OnSearch,
			fetchDataByRefer : fetchDataByRefer,		
		};
		
		var config = Object.assign({
			
			init: function(config) {

				var pressSearchBtn = new OnSearch("#searchBtn");

				$(document).on("pressSearchBtn", function(event, formattedUsrRequest) {
				   		fetchDataByRefer(formattedUsrRequest).then(loadItem);
				});
			}

	    }, testingAPI);

    return config;
}());

	function loadItem() {
	}

	function fetchDataByRefer(request) {

				if(!request) {
					return $.Deferred().resolve().promise();
				}

				return $.ajax({
							url  : '/EasyGoods/easyApi/product',
							data : JSON.stringify(request),
							method : 'POST'
						})
						.pipe( function(resp) {
							if (!resp) {
								$("input#searchBox").val("Zero Stock!");
								return;
							}
							return resp;
						});
	}

	function validator() {
	}

	function OnSearch(buttonDOM) {
	this.$elem = $(buttonDOM);
	this.$elem.on('click', this.searchInStock);
	}	

			OnSearch.prototype.searchInStock = function() {
				if ( this.isSearchStringFormatValid() ) {
					$(document).trigger("pressSearchBtn", [this.getFormattedSearchString()]);
					return;
				}
				this.searchFailForInvalidSearchString();
			};

			OnSearch.prototype.searchFailForInvalidSearchString = function() {
				this.getSearchStringWrapperTag().val('invalid input');
			};

			OnSearch.prototype.isSearchStringFormatValid = function() {
				return validator(this.getFormattedSearchString());
			};

			OnSearch.prototype.getFormattedSearchString = function() {
				this.formatSearchString();
				return this.formatedSearchString;			
			};

			OnSearch.prototype.formatSearchString = function() {
				var formatedSearchString = {};
				var searchedKeyword    = $.trim( this.getSearchStringWrapperTag().val() );
				var searchBaseOn       = $("#searchBaseOn option:selected").text();
					
				formatedSearchString[searchBaseOn] = searchedKeyword;	
				this.formatedSearchString = formatedSearchString;
			};

			OnSearch.prototype.getSearchStringWrapperTag = function() {
				return this.$elem.prev().children(); // input tag with id="searchBox"
			};

			








