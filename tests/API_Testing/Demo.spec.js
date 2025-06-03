const{test,expect}=require('@playwright/test')

var response_ID;

test("Create_User", async ({request})=>{

    const response= await request.post('https://reqres.in/api/users' , {
         data :{
            "name":"Steve",
            "job" : "Automation Tester"
         },
         headers :{
            "Accept" : "Application/json",
            "x-api-key" : "reqres-free-v1"
         }
    });


    console.log(await response.status());
    console.log(await response.json());
    await expect(response.status()).toBe(201);

    var res= await response.json();
    response_ID=res.id;
    console.log('Response ID is : '+response_ID);

    console.log('-------------------------------------------------------------------------------------------------------------');
})

test('Update_User', async({request})=>{

    const response= await request.put('https://reqres.in/api/users/'+response_ID, {
        data:{
            "name":"Steve",
            "job" : "Automation Test Engineer"
        },
        headers: {
             "Accept" : "Application/json",
            "x-api-key" : "reqres-free-v1"
        }
    });

    console.log(await response.status());
    console.log(await response.json());
    await expect(response.status()).toBe(200);
    console.log('-------------------------------------------------------------------------------------------------------------');

})

test('Get_User',async({request}) =>{

    const response= await request.get('https://reqres.in/api/users/2',{
        headers:{
             "Accept" : "Application/json",
             "x-api-key" : "reqres-free-v1"
        }
    });
    console.log(await response.statusText());
    console.log(await response.json());
    console.log(await response.status());

    await expect(await response.status()).toBe(200);
    console.log('-------------------------------------------------------------------------------------------------------------');


})

test('Delete_User', async({request})=>{

    const response= await request.delete('https://reqres.in/api/users/'+response_ID, {
        headers: {
             "Accept" : "Application/json",
            "x-api-key" : "reqres-free-v1"
        }
    });

    console.log(await response.status(),await response.statusText());
    //console.log(await response.json());
    await expect(response.status()).toBe(204);
    console.log('-------------------------------------------------------------------------------------------------------------');

})
