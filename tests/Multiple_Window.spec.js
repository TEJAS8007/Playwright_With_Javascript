const {test,expect, chromium} =require('@playwright/test')
test('Multiple_Window_Test',async()=>{

   const browser=  await chromium.launch({headless:false});
   const context=await browser.newContext();
   const page=await context.newPage();
   await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

   const all_links= await page.$$('a');
   console.log("All Links On Web Page : "+all_links.length);
   for(let el of all_links) {
    console.log(await el.innerText());
   }
   console.log("==================================================================================================================");
   const footer= await page.$('#gf-BIG');
   const all_Footer_Links= await footer.$$('a');
   console.log("All Footer Links : "+all_Footer_Links.length);
   const Discount=await page.$('//table[@class="gf-t"]//tr//td[1]//ul');
   const all_Discount_Links= await Discount.$$('a');
   console.log("All Discount Links : "+all_Discount_Links.length);
   for(let a=0;a<all_Discount_Links.length;a++) {  
      await all_Discount_Links.at(a).press('Control+Enter');
   }
   //const pagepromise=await page.waitForEvent('page');
   const pages= context.pages();
   for(let p of pages) {
      await p.waitForLoadState();
      console.log('Title of Page : '+await p.title());
      await page.waitForTimeout(2000);
      
   }
  
  await context.close();
  await browser.close();

})