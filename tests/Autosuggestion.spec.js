const {test,expect} =require('@playwright/test')

test('auto' , async ({page}) => {

    await page.goto('https://www.redbus.in/');

    await page.waitForLoadState();

    await page.locator('#src').fill('DELHI');

    await page.waitForSelector("//ul[@class='sc-dnqmqq dZhbJF'] /li/div/text[1]");

    const city= await page.$$("//ul[@class='sc-dnqmqq dZhbJF'] /li/div/text[1]");

    for(const cityOption of city){

        const values= await cityOption.textContent();   q
       // console.log(values);

        if(values.includes('Anand Vihar')){
            await cityOption.click();
            break;
        }
    }


    await page.waitForTimeout(1000);
})