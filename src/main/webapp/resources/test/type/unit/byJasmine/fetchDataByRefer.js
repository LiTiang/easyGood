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

    it('function will return promise anyway', function() {
        
    });

    it('correct xhr request & url', function() {

    });

});


