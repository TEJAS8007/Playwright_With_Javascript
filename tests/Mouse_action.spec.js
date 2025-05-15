const{test,expect}= require('@playwright/test')

test('Mouse' , async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');


    // const desktops= await page.locator("//a[normalize-space()='Desktops']");

    // const mackbook=await page.locator('//*[@id="narbar-menu"]/ul/li[1]/div/div/ul/li[1]/a');

    // await desktops.hover();
    // await mackbook.hover();

    //right click
    // await page.click('locator',{button : 'right'});


    const copybutton=await page.locator('//*[@id="HTML10"]/div[1]/button');

    await copybutton.dblclick();

    const field2 = page.locator('#field2');
    await expect(field2).toHaveValue('Hello World!');


    await page.waitForTimeout(3000);


    const source=await page.locator('//*[@id="draggable"]');
    const target=await page.locator('//*[@id="droppable"]');

    //await page.dragAndDrop(source,target);
    await source.dragTo(target);

    await page.waitForTimeout(2000);


    const name=await page.locator('#name');
    const last_name=await page.locator('#email');

    await name.type('Tejas');

    // ctrl A
    await page.keyboard.press('Control+A');
    // ctrl C
    await page.keyboard.press('Control+C');
    //tab
    await page.keyboard.down('Tab');
    // ctrl V
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(2000);
     
})