const {test,expect} =require('@playwright/test')


test.beforeAll( async()=>{
    console.log('before  All');
} )

test.afterAll( async()=>{
    console.log('After  All');
} )

test.beforeEach( async()=>{
    console.log('before  Each');
} )

test.afterEach( async()=>{
    console.log('After  Each');
} )



test.describe('Group 1' , ()=>{

    test('Test1', async({page}) =>{

    console.log('Test 1');
})

test('Test2', async({page}) =>{

    console.log('Test 2');
})

})



test.describe('Group 2' , ()=>{

    
test('Test3', async({page}) =>{

    console.log('Test 3');
})

test('Test4', async({page}) =>{

    console.log('Test4');
})

})


