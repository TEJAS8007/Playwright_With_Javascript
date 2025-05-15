const {test,expect}= require('@playwright/test')

test('Dropdown',async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

   // await page.selectOption('#colors',['Blue','Red','Yellow']);

    const option= await page.$$('#colors option');
    
    await expect(option.length).toBe(5);
    
})