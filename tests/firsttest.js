const {chromium} = require('@playwright/test');

(async ()=> {
    //Creating the browser instance
    const browser = await chromium.launch({
        headless: false
    });

    //Browser Instance
    const browserIstance = await browser.newContext();

    //Page
    const page = await browserIstance.newPage();

    //Navigate Google
    await page.goto("https://google.com");


})();