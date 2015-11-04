describe('OnSearch', function() {

var basePathPropertyOfKarmaConfig = 'base';    

    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = basePathPropertyOfKarmaConfig + '/test/fixtures/';        
        loadFixtures('searchUiComp.html');

        this.easyGoodApp = Object.create( easyGood );
        this.OnSearch    = new this.easyGoodApp.OnSearch( $("form").children() );        
    });

    describe('Object creation', function() {
    
        it('- Constructer : OnSearch', function() {

            expect( this.OnSearch );
        });

        it('- duplicate easyGoodApp object', function() {

            expect( this.easyGoodApp );
        });    
    });

    describe('test getSearchStringWrapperTag method', function() {

        it('- getting < input id=searchBox >', function() {

            expect( (this.OnSearch.getSearchStringWrapperTag())[0] )
            .toBe(  $("input")[0] );
        });
    });

    describe('test getFormattedSearchString method', function() {
        
        it('- correct reformatted usr request', function() {
            
            loadFixtures("select.html");

            expect( this.OnSearch.getFormattedSearchString() )
            .toEqual( { name: 'epochTime' } );
        });
    });

    describe('test searchFailForInvalidSearchString method', function() {

        it('- usr input is invalid', function() {

            this.OnSearch.searchFailForInvalidSearchString();

            expect(this.OnSearch.getSearchStringWrapperTag().val())
            .toBe('invalid input');
        });
    });

    describe('test searchInStock method', function() {

        it('- usr input is valid', function() {
            var flag;
            var spy;

            loadFixtures("select.html");

                spy = function(event, usrRequest) { 
                        flag = [].slice.call(arguments);
                };   

                $(document).on("pressSearchBtn", spy);

                sinon.stub(window, "validator").returns(true);

                this.OnSearch.searchInStock();

                expect( flag[1] ).toEqual( { name: 'epochTime' } );
        });

    });
});

