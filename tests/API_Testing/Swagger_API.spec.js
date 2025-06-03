const {test,expect}=require('@playwright/test')

var product_ID;

test('Create_User',async({request}) =>{

    const response= await request.post('https://api.restful-api.dev/objects',{
        data: {

            
              "name": "Apple MacBook Pro 16",
              "data": {
                         "year": "2019",
                         "price": "1849.99",
                         "CPU model": "Intel Core i9",
                         "Hard disk size": "1 TB"
   
                      }
             },
             headers:{
                "Accept":"Application/json"
             }
    });

    console.log(await response.status(),await response.text());
    console.log(await response.json());
    await expect(await response.status()).toBe(200);

    var res=await response.json();
    product_ID=res.id;
    console.log("Product ID Generated is : "+product_ID);
})

test('Update_User',async({request}) =>{

    const response= await request.put('https://api.restful-api.dev/objects/'+product_ID,{
        data: {    
              "name": "Lenovo Thinkpad 15",
              "data": {  "year": "2019",
                         "price": "1849.99",
                         "CPU model": "Intel Core i9",
                         "Hard disk size": "1 TB"
                      }
             },  headers:{"Accept":"Application/json"   }
    });

    console.log(await response.status(),await response.text());
    console.log(await response.json());
    await expect(await response.status()).toBe(200);

})

test('Get_User',async({request}) =>{

    const response= await request.get('https://api.restful-api.dev/objects/'+product_ID,{
             headers:{
                "Accept":"Application/json"
             }
    });

    console.log(await response.status(),await response.text());
    console.log(await response.json());
    await expect(await response.status()).toBe(200);

})

test('Delete_User',async({request}) =>{

    const response= await request.delete('https://api.restful-api.dev/objects/'+product_ID,{
             headers:{
                "Accept":"Application/json"
             }
    });

    console.log(await response.status(),await response.text());
    console.log(await response.json());
    await expect(await response.status()).toBe(200);

})