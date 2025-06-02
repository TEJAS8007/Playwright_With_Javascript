const {chromium} = require('@playwright/test')

async()=>{
    const browser= await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const all_links= await page.$$('a');
    console.log("All Links on Web Page : "+await all_links.length());

}