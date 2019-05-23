describe('locators',function(){

    browser.get("http://juliemr.github.io/protractor-demo/");
    element(by.model("first")).sendkeys("5");
    element(by.model("second")).sendkeys("5").then(function(){
        browser.sleep(3000);
    })


})