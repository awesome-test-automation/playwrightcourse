const {chromium} = require('@playwright/test');
 
(async () => {
    const browser = await chromium.launch({
        headless:false
    });

    const broserInstance = browser.newContext();
    const page = await (await broserInstance).newPage();
    await page.goto("https://google.com");
    await browser.close();

})();