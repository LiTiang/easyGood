var easyGood = (function() {

		var testingAPI = {

			OnSearch         : OnSearch,
			fetchDataByRefer : fetchDataByRefer,
			checkingResponse    : checkingResponse, 
			presentResponse  : presentResponse		

		};
		
		var config = Object.assign({
			
			init: function(config) {

				var pressSearchBtn = new OnSearch("#searchBtn");
				var checkResponse  = new checkingResponse();

				$(document).on("pressSearchBtn", function(event, formattedUsrRequest) {
				   		fetchDataByRefer(formattedUsrRequest)
				   		.then(checkResponse)
				   		.then(presentResponse);
				});
			}

	    }, testingAPI);

    return config;
}());

	function checkingResponse(resp) {
		this.resp = arguments[0];
	}

			checkingResponse.prototype.isResponseFormatCorrectly = function() {
				return true;
			};

			checkingResponse.prototype.respNonexistHandler = function() {
				if (!this.resp) {
					$("input#searchBox").val("Zero Stock!");
				}
			};

	function presentResponse() {
		$("tbody .partnumber:first-child").text(1);
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
						.pipe( function(resp){ return resp;
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

			








