const {test,expect}=require('@playwright/test')

test('Handle Dropdown',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //Mutiple way to select value from Dropdown
    //await page.locator('#dropdown-class-example').selectOption({label : 'Option1'});

    //await page.locator('#dropdown-class-example').selectOption('Option1');

    //await page.locator('#dropdown-class-example').selectOption({value : 'option1'})

    //await page.locator('#dropdown-class-example').selectOption({index : 1})

    //await page.selectOption("#dropdown-class-example","Option1")

    //Assertion
    //1)nof of option
    const count= await page.locator("#dropdown-class-example option");
    expect(count).toHaveCount(4);
    await page.waitForTimeout(1000);

    const options= await page.$$('#dropdown-class-example option')
    console.log("Number Of Options : ",options.length);
    await expect(options.length).toBe(4);
    

})