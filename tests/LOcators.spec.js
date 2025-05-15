import {test,expect } from '@playwright/test'
test('Locators', async ({page})=> {

    await page.goto('https://www.demoblaze.com/index.html');

    // click on login
    await page.locator('id=login2').click();

    //await page.click('id=login2');
    
    // filling username box
    await page.locator('#loginusername').fill('SDET_QA');
    //await page.locator('#loginusername').type('SDET_QA');

    // filling passwoed box
    await page.locator('#loginpassword').fill('1234');

    // click on login
    await page.locator("//button[text()='Log in']").click();

    // checking login visibility by assertion
    const logout_Link= await page.locator('#logout2');
    await expect(logout_Link).toBeVisible();

    // Locating multiple Webelement
    const Links= await page.$$('a');

    for(const link of Links) {
        console.log(await link.textContent());
    }

    // product Names Home Page
    page.waitForSelector('div#tbodyid div h4 a');
    const product_name=await page.$$('div#tbodyid div h4 a');

    for(const Names of product_name){
        console.log(await Names.textContent());
    }

    await page.close();
}
)