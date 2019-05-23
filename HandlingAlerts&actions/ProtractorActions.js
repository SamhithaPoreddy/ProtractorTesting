describe('Actions',function(){

    it('locators',function(){

        browser.get("https://www.zagat.com/denver");
       
        browser.actions().mouseMove(element(by.css("div[flex='grow']")).click()).perform().then(function(){
            browser.sleep(3000);
        })

        browser.actions().mouseMove(element(by.repeater("searchTerm in ::searchBarCtrl.contextSearches"))).click().perform();
        browser.actions().mouseMove(element(by.css("div[class='zgt-placecard-box layout-row']"))).click().perform();

       
       

        
        })
       
    }) 
