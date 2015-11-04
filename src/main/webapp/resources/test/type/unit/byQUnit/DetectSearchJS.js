//  _____                 _   _             
// |  _  |               | | (_)            
// | | | |_   _  ___  ___| |_ _  ___  _ __  
// | | | | | | |/ _ \/ __| __| |/ _ \| '_ \ 
// \ \/' / |_| |  __/\__ \ |_| | (_) | | | |
//  \_/\_\\__,_|\___||___/\__|_|\___/|_| |_|
                                                                                
//  1.  how to spy `validator` in DetectSearch.prototype.verifyRequestFormat ????

(function() {

'use strict';

// var easyGoodApp; // if no declaration with "var", ...  
var DetectSearch;// use this.easyGoodApp in beforeEach & afterEach 
var $fakeSearchUiForDetect;
	
	QUnit.module('DetectSearch', {
	beforeEach: function() {
	  		$fakeSearchUiForDetect = $("<div><input value='epochTime'></div><button></button>");
	    	this.easyGoodApp = Object.create(easyGood);
	    	DetectSearch = new this.easyGoodApp.DetectSearch($fakeSearchUiForDetect);
	},
	afterEach: function() {
	  		this.easyGoodApp = null;
	  		DetectSearch = null;
	  		$fakeSearchUiForDetect = null; // if no this stuff, 
	}									   // 5th test will be polluted by side effect of 4th test  
	});

			QUnit.test('contructor instantiation', function(assert) {
				assert.ok(this.easyGoodApp, 'easyGoodApp instantiation');
				assert.ok(DetectSearch, 'DetectSearch instantiation');
			});

			QUnit.test('.prototype.getSearchStringWrapper', function(assert) {
			   assert.deepEqual( (DetectSearch.getSearchStringWrapper())[0],
			   	                  ( $fakeSearchUiForDetect.children("input"))[0], 
			   	                  			'getting input#searchBox tag' );
			});

			QUnit.test('.prototype.formatSearchString', function(assert) {
			   assert.deepEqual( DetectSearch.formatSearchString(), 
			   		{ name: 'epochTime' }, 'correct reformatted usr request' );
			});

			QUnit.test('.prototype.RequestFormatIsInvalid', function(assert) {
					DetectSearch.RequestFormatIsInvalid();
						assert.deepEqual( DetectSearch.getSearchStringWrapper().val(), 
								'invalid input', 'usr input is invalid' );	
			});

			QUnit.test('.prototype.validRequestFormat', function(assert) {

				var flag;
				var spy;

					spy = function(event, usrRequest) { 
						flag = [].slice.call(arguments);
					};	 
					$(document).on("pressSearchBtn", spy);

					DetectSearch.goSearch();

					assert.deepEqual( flag[1], { name: 'epochTime' }, 'usr input is valid' );
			});

var requests = [];
var easyGoodApp; 
var fetchData;  

	QUnit.module("fetchDataByRefer - check request", {

    	beforeEach : function() {

	        this.xhr = sinon.useFakeXMLHttpRequest(); // XMLHttpRequest use open() and
	        this.xhr.onCreate = function(xhr) {       // send() to send a request to a server
	            requests.push(xhr); // xhr = new XMLHttpRequest() // jqXHR
	        };						// if use $.ajax, this func will be called ! and xhr is inner setting of $.ajax

	    	easyGoodApp = Object.create(easyGood);
	    	fetchData = easyGoodApp.fetchDataByRefer;
   		 },
    	afterEach  : function() {
			
			requests = [];
			this.xhr.restore();
	        
    		easyGoodApp = null;
    		fetchData = null;		
    	}
	});

			QUnit.test('check return of function call with or without arg ', function(assert) {
				assert.ok($.isFunction(fetchData('request').then), 'return a promise for insert it will a request');
				assert.ok($.isFunction(fetchData().then), 'althought no request, still return a promise');
			});

			QUnit.test('check XHR request for HTTP method of POST', function(assert) {
				
				var xhr;
				var fakeRequestData = {data:'toServer'};
				var expectRequestBody = Object.keys(fakeRequestData) + '=' + fakeRequestData.data;

				fetchData({data:'toServer'});
				xhr = requests[0];
				assert.deepEqual(xhr.url, '/EasyGoods/easyApi/product', 'correct url');
				assert.deepEqual(xhr.requestBody, expectRequestBody, 'correct request'); // requestBody is called message body or payload
			});



	QUnit.module("fetchDataByRefer - check response", {

    	beforeEach : function() {

			var url = '/EasyGoods/easyApi/product';
    		var header = [];

    		this.HTTP_Resp = {
    		
    				statusCode   : 200,
    				responseBody : 'fakeDataFromServer',
    				MIME_TYPE 	 : {"Content-Type": "application/json" },
    		};

			header.push( this.HTTP_Resp.MIME_TYPE );
		    header.push( this.HTTP_Resp.statusCode );
		    header.push( this.HTTP_Resp.responseBody );

		    this.fakeServer = sinon.fakeServer.create();
		    this.fakeServer.respondWith('POST', url, header); // only such info, fake server response u

	    	easyGoodApp = Object.create(easyGood);
	    	fetchData = easyGoodApp.fetchDataByRefer;		    
    	},

    	afterEach  : function() {   	
    		this.fakeServer.restore();
    		easyGoodApp = null;
    		fetchData = null;    		
    	}
	});

			QUnit.test('check response for HTTP method of POST', function(assert) {

				var spy = sinon.spy();
				fetchData( {data:'toServer'} ).then(spy);
				this.fakeServer.respond();
				ok(   spy.calledWith( this.HTTP_Resp.responseBody ), "correct respond data");				
			});				

})();