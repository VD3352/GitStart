import { browser } from "protractor";
import { element, by } from "protractor";
import { async } from "q";
import { calculator } from "./pageObjects/calculator";
import { angularHomePage } from "./pageObjects/angularHomePage";

describe('Page Object Model', () => {

    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    it('Open calculator website', async () => {

        let obj = new calculator();


        await browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        await obj.firstEditBox.sendKeys("3");
        await obj.secondEditBox.sendKeys("5");
        await obj.go.click();
        await obj.getResult.getText().then(function (text) {
            console.log(text);
        })


        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();

    })


    it('Angular home page title validation', async () => {
        let obj1 = new angularHomePage();
        await browser.get("https://angularjs.org/");
        await obj1.angularLink.click();
        await browser.sleep(3000);
        await obj1.search.sendKeys("hello");

    })
})
