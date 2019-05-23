describe('Actions',function(){

    it('locators',function(){

        browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.com/practice.php");
        element(by.id("alertbtn")).click();
        browser.switchTo().alert().accept().then(function(){
            browser.sleep(3000);
        })
       
        
        

       
       

        
        })
       
    }) 
