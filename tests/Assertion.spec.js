const {test,expect}=require('@playwright/test')

test('Assertion', async ({page}) => {

    // Hard Assertion

    await page.goto('https://demo.nopcommerce.com/');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/');

    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');

    const logo= await page.getByAltText('nopCommerce demo store');
    await expect(logo).toBeVisible();

    //await page.locator('a.ico-register').click();
    // const male = await page.locator('#gender-male');
    // await male.click();
    // await expect(male).toBeChecked();

    await expect(await page.locator('a.ico-register')).toHaveText('Register');

    await expect(await page.locator('select#customerCurrency option')).toHaveCount(2);

    //Soft Assertion
    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/');

})