const {test,expect}=require('@playwright/test')

test('Home Page',async ({page}) =>{

   await page.goto('https://www.demoblaze.com/index.html');

   const pageTitle=page.title();
   console.log('Page title : ' ,pageTitle);

   await expect(page).toHaveTitle('STORE');

    console.log(page.url);

   await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
})