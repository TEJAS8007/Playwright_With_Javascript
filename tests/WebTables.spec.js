const { test, expect } = require('@playwright/test');

test('WebTable', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table = page.locator('#productTable');

  // Number of columns
  const columns = table.locator('thead tr th');
  const columnCount = await columns.count();
  console.log('Column Count:', columnCount);
  expect(columnCount).toBe(4);

  // Number of rows
  const rows = table.locator('tbody tr');
  const rowCount = await rows.count();
  console.log('Row Count:', rowCount);
  expect(rowCount).toBe(5);


  // selecting values
//   const matchedrows=  rows.filter( {
//        has: page.locator('td'),
//        hasText: 'Laptop'
//   })

//   await matchedrows.locator('input').check();

// selecting multiple rows

// await selectProduct(rows,page,'Smartphone');
// await selectProduct(rows,page,'Laptop');
// await selectProduct(rows,page,'Smartwatch');

// Getting product data
/*
for(let i=0; i< await rowCount;i++) { //rows

    const row= rows.nth(i);
    const td=row.locator('td');

    for(let j=0; j<await td.count()-1 ; j++) { // columns

        console.log(await td.nth(j).textContent());

    }
}  */

    //pagination

    const pages= await page.locator('ul.pagination li a');
    const pagesCount = await pages.count();
    console.log('Page Count:', pagesCount);

    for(let p=0; p<await pagesCount ; p++) {

        if(p>0){
            await pages.nth(p).click();
        }

        for(let i=0; i< await rowCount;i++) { //rows

            const row= rows.nth(i);
            const td=row.locator('td');
        
            for(let j=0; j<await td.count()-1 ; j++) { // columns
        
                console.log(await td.nth(j).textContent());
        
            }
        }

        await page.waitForTimeout(1000);
    }


    await page.waitForTimeout(3000);

});

async function selectProduct(rows , page ,name){

    const matchedrows=  rows.filter( {
                has: page.locator('td'),
                hasText: name
           })
        
          await matchedrows.locator('input').check()
}
