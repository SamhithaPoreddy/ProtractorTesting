describe('basics of protractor',function(){

    it('open any website', function(){

          browser.get("https://angularjs.org");

          browser.get("https://angularjs.org").then(function(){
              browser.sleep(3000);

            console.log("hello")
          })


    })

})