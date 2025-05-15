const{test,expect}= require('@playwright/test')

test('datepicker' , async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   // await page.fill('input#datepicker' ,'03/05/2025');

   const month='May';
   const year='2026'
   const date='14';

   await page.click('input#datepicker');

   while(true) {

       const Displayed_month=await page.locator('.ui-datepicker-month').textContent();
       const Displayed_Year=await page.locator('.ui-datepicker-year').textContent();
       
        
       if(Displayed_month==month && Displayed_Year==year) {
          break;
       }

       
        await page.click("span[class='ui-icon ui-icon-circle-triangle-e']");
       
   
  
    }

    // const dates= await page.$$("a.ui-state-default");

    // for(const dates_Data of dates) {

    //     if(await dates_Data.textContent()==date) {
    //         await dates_Data.click();
    //         break;
    //     }
    // }

    await page.click();

    await page.waitForTimeout(2000);


})