describe('aasertion elemnts',function(){

    it('locators',function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10");

        element(by.css("h2[class='ng-binding']")).getText().then(function(val){
            console.log(val);
        })
       
    }) 
})