describe('fetchDataByRefer', function() {

var header;
var HTTP_Resp = {};
var spy       = sinon.spy();
var url       = '/EasyGoods/easyApi/product';
	
HTTP_Resp.statusCode   = '200';
HTTP_Resp.MIME_TYPE    = '{"Content-Type": "application/json" }';
HTTP_Resp.responseBody = 'fakeDataFromServer';

header = $.map(HTTP_Resp, function(value, index){  return [value];  });
	
	beforeEach(function() {

	    this.fakeServer       = sinon.fakeServer.create();
	    this.fakeServer.respondWith('POST', url, header); // only such info, fake server response u
        this.easyGoodApp      = Object.create( easyGood );
        this.fetchDataByRefer = this.easyGoodApp.fetchDataByRefer;        
	});

	afterEach(function() {

		this.fakeServer.restore();
        this.fetchDataByRefer = null;
        this.easyGoodApp      = null;	
	});

		it('response for HTTP POST', function() {

			this.fetchDataByRefer( {data:'toServer'} ).then(spy);

			this.fakeServer.respond();

			expect( spy.calledWith(HTTP_Resp.responseBody) ).toBeTruthy();
			
		});

	});
