describe('fetchDataByRefer', function() {
var requests = [];

    beforeEach(function() {

        this.xhr = sinon.useFakeXMLHttpRequest(); 
        this.xhr.onCreate = function(xhr) {         
            requests.push(xhr); 
        };                      
        this.easyGoodApp      = Object.create( easyGood );
        this.fetchDataByRefer = this.easyGoodApp.fetchDataByRefer;        
    });

    afterEach(function() {
            
        requests = [];
        this.xhr.restore();
        
        this.easyGoodApp = null;
        this.fetchDataByRefer = null;          
    });

    describe('function will return promise', function() {

        it('no matter with function para ', function() {
            expect( this.fetchDataByRefer('request').then ).toBeFunction();
        });

        it('or without function para', function() {
            expect( this.fetchDataByRefer().then ).toBeFunction();
        });

    });

    describe('xhr', function() {
    var xhr;
    var fakeRequestData = {data:'toServer'};
    var expectRequestBody = Object.keys(fakeRequestData) + '=' + fakeRequestData.data;

    beforeEach(function() {
        this.fetchDataByRefer({data:'toServer'});
        xhr = requests[0];
    });

        it('correct url', function() {
            expect(xhr.url).toBe('/EasyGoods/easyApi/product');
        });

        it('correct request ', function() {
            expect( $.parseJSON(xhr.requestBody) ).toEqual({data:'toServer'});
        });

    });

});


