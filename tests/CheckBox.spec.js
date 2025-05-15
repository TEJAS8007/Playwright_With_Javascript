const{test,expect}= require('@playwright/test')


test('checkBox' ,async ({page}) =>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    await page.locator('#checkBoxOption1').click();

    expect(await page.locator('#checkBoxOption1')).toBeChecked();
    expect(await page.locator('#checkBoxOption1').isChecked).toBeTruthy();

    await page.waitForTimeout(2000);

    await page.locator('#checkBoxOption1').click();

    const CheckboxLocators=[
         "//input[@id='checkBoxOption1' and @type='checkbox']",
         "//input[@id='checkBoxOption2' and @type='checkbox']",
         "//input[@id='checkBoxOption3' and @type='checkbox']"

    ];

    for(const locators of CheckboxLocators){
        await page.locator(locators).check();
    }

    await page.waitForTimeout(3000);

    for(const locators of CheckboxLocators){

        if(await page.locator(locators).isChecked){
            await page.locator(locators).uncheck();
        }
    }
})