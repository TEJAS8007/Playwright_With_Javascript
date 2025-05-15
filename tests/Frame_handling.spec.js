const{test,expect}=require('@playwright/test')

test.skip('Frame Test' , async ({page}) =>{

    await page.goto('https://jqueryui.com/button/');

    const allFrames= await page.frames();
    console.log(allFrames.length);

    //using url
    // const Frame1= await page.frame({url :'/resources/demos/button/default.html'});

    // await Frame1.click('/html/body/div/button');
 
    // await page.waitForTimeout(2000);
 
    //using frame locator
      

    const Frame=await page.frameLocator('iframe,demo-frame');

    await page.waitForSelector('/html/body/div/button');

    await Frame.locator('/html/body/div/button').click();

})

test('Frame Test2' , async ({page}) =>{ 
 
     await page.goto('https://ui.vision/demo/webtest/frames/');

     const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
 
     //await frame3.locator('//*[@id="id3"]/div/input').fill('Tejas');

     //Inner frame
     const child_Frames= await frame3.childFrames();

     child_Frames[0].locator('//*[@id="i6"]/div[3]/div').check();

     await page.waitForTimeout(2000); 

})
