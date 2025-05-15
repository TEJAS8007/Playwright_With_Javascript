import{test,expect} from '@playwright/test'

test('built_Locators',async({page}) => {

    page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // getbyalt
    const logo= await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //get bv placeholder
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // get by role 
    await page.getByRole('button',{type : 'submit'}).click();

    //getby text
     const Name=await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p').textContent();
     await expect(page.getByText(Name)).toBeVisible();

     //getbyLabel
     //getbytitle
     //getByTestId
})