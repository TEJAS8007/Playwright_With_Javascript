const {test,expect}=require('@playwright/test')

test('Google Hande' ,async({page}) =>{

    await page.goto('https://www.google.com/');

    await page.locator('#APjFqb').fill('selenium');

    const options= await page.locator("div[role='presentation'] [role='option']");
    console.log('Total Option Displayed----> '+await options.count());
    
}) 
