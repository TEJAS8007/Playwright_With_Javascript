const {test,expect}= require('@playwright/test')

test('Boot',async({page}) => {

    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/#google_vignette');

    await page.locator('#comboTree700821ArrowBtn').click();

    await page.locator('#comboTree700821DropDownContainer').getByText('choice 6 2 2').click();
    
    await page.locator('html').click();
})  