describe('All locators',function(){

    function Calculate(a,b,c){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        element.all(by.tagName("option")).each(function(item){

            item.getAttribute("value").then(function(val){

                if(val==c){

                    item.click();
                }
            })
        })

        element(by.id("gobutton")).click();
    }
    it('locators',function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        
        Calculate(3,5,"MULTIPLICATION");

        Calculate(3,5,"DIVISION");
        Calculate(5,5,"DIVISION");
        Calculate(150,6,"ADDITION");
        

        element.all(by.repeater("result in memory")).each(function(items)
        {

            items.element(by.css("td:nth-child(3)")).getText().then(function(text){

                console.log(text);
            })

        })
        
        
  
       
    }) 
})