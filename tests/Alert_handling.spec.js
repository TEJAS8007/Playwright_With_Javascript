const {test,expect}= require('@playwright/test')

test('ALert' ,async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.waitForLoadState();

    //Aler handling
    page.on('dialog' , async dialog =>{

        expect(dialog.type()).toBe('alert')
        expect(dialog.message).toContain('I am an alert box!')
        await dialog.accept();
        //await dialog.dismiss();
        //await dialog.type('Tejas').accept();
    })

    await page.click('//*[@id="alertBtn"]');
});