describe('class checkingResponse', function() {
var basePathPropertyOfKarmaConfig = 'base';    
var check;

	beforeEach(function() {
		jasmine.getFixtures().fixturesPath = basePathPropertyOfKarmaConfig + '/test/fixtures/';        		
        this.easyGoodApp = Object.create( easyGood );
        check = new this.easyGoodApp.checkingResponse("resp");        		
	});

	it('create checkingResponse obj', function() {
		expect(check).toBeDefined();
	});

	it('check response exist', function() {
	 	expect( check.resp ).toBeDefined();
	}); 

	it('if no response, show msg "Zero Stock" on <input id=searchBox>', function() {
		
		loadFixtures("searchUiComp.html");
		check.resp = null;
		$("input#searchBox").val("");

		check.respNonexistHandler();

		expect( $("input#searchBox").val() ).toBe("Zero Stock!");
	});

	it('check response format correctly', function() {
		expect( check.isResponseFormatCorrectly() ).toBeTruthy();		
	});

});


describe('func presentResponse', function() {
var basePathPropertyOfKarmaConfig = 'base';    
var presenter;

	beforeEach(function() {
		jasmine.getFixtures().fixturesPath = basePathPropertyOfKarmaConfig + '/test/fixtures/';        
        this.easyGoodApp 				   = Object.create( easyGood );
        presenter        				   = this.easyGoodApp.presentResponse;        		

	});	

	it('presentResponse exist', function() {
		expect(presenter).toBeTruthy();
	});

	it('presented data is loaded successfully', function() {
        loadFixtures("presentResponse.html");

		presenter();
		
		expect( $("tbody .partnumber:first-child").text() ).not.toBe("");
	});
});









	// it('presentResponse will be called after previous then() finish work', function() {
	// 	var recorder;
	// 	var ajax = $.Deferred().resolve("resp");

	// 		function checkingResponse() { 
	// 			return $.Deferred().resolve(); 
	// 		}
	// 		function detectPresentBeenCalled() {
	// 			recorder = true;
	// 		}

	// 		ajax.then(checkingResponse).then(detectPresentBeenCalled);

	// 		expect(recorder).toBeTruthy();expect(recorder).toBeFalsy();
	// });
