const {test,expect}=require('@playwright/test')

test('InputBox' ,async({page})=>{

    await page.goto('https://demo.guru99.com/test/newtours/login.php');

    await expect(await page.locator("input[name='userName']")).toBeVisible();
    await expect(await page.locator("input[name='userName']")).toBeEmpty();
    await expect(await page.locator("input[name='userName']")).toBeEditable();
    await expect(await page.locator("input[name='userName']")).toBeEnabled();
    
    

    await page.locator("input[name='userName']").fill('QQQQ');

    // Radio button checked trulty or not truly

    await page.waitForTimeout(5000);
})