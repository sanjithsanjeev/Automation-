// import { browser,element,by } from "protractor"


const { browser, element ,by} = require("protractor")
describe("login test ",()=>{
     

    beforeEach(()=>{
        browser.waitForAngularEnabled(false)
        browser.get('http://localhost:3001/login');
        browser.manage().window().maximize();
        // browser.waitForReact(true)

    })
    it("lounch applicaion",()=>{
        // const userToken = 'eyJraWQiOiJnV2RyczdJMWpKdDZYRGVRNWhtTFN5ZmRIZ3kxa3ZFRFFBcmdjaTU5Y1JzPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiYjc4ZjlkZDktMzAzNS00ODg2LWJiZjAtZmYwOTYzZmQ4ODZiIiwic3ViIjoiNThiYjE4MDMtZjEyZS00MWYwLThlZTAtMjk0YmU2ZjMzMDk3IiwiZXZlbnRfaWQiOiI2NWIyNDA1ZS02ZWQ1LTQ1MDMtYTRlMy1jYjY4MjlmNDAyMDYiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjQ2MTE4MjYzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9GRUs5eXgyTzgiLCJleHAiOjE2NDYxMjE4NjMsImlhdCI6MTY0NjExODI2MywianRpIjoiMmZkMzlhNTctNWU4MS00NWEyLWFlY2MtNzNmMzkzYzNjYjgxIiwiY2xpZW50X2lkIjoiNGpuZjZrMHBwOGo0cGNxOTZ1bWYzcXZlajUiLCJ1c2VybmFtZSI6IjU4YmIxODAzLWYxMmUtNDFmMC04ZWUwLTI5NGJlNmYzMzA5NyJ9.OBRolu5LOYDf5R-YFttpa-LNVgSTI0fxFiKr4JkoCGxg6uNc12gUS7w1cFEcHdhnL5p0CM9_gxCdR2jDZVZWW6Z1ou0OiEQHbkOBtuYGK2rm3jhkI1WmOoU-NpsOpaVAg1t8zHg2mzTCSD_rGUoIIImhAYygzgP5s4XiiZeatgadwFto2RCXETgG-TXaAjrLem5KFHD6rFlApFir9i1Xyk3PzQ6Xu-GSf5qI9RkJmaCPvq9zegi11LDbXN2WJzgT-5C3sTRt1rb1kfNko3oseuZdKVNh7wxzc5zp6eAIQqpxrxXm2K3CE2dMVmKNc8Wg8Ppg99cr2azK_MEjB7DXmg';
        element(by.id('outlined-adornment-email-login')).sendKeys('sanjith+9@zeefasys.com');
         element(by.id('outlined-adornment-password-login')).sendKeys('#aA123456');
      element(by.buttonText('Sign In')).click();
    //     // login_form.click();
    //     // const localStorageToken = browser.executeScript('return localStorage.getItem("serviceToken");');
    //     // expect(localStorageToken).toEqual(userToken)
       
        browser.sleep(10000)
    })
// it("set password",()=>{
//      element(by.id('outlined-adornment-email-login')).sendKeys('sanjith+18@zeefasys.com');
//      element(by.id('outlined-adornment-password-login')).sendKeys('Sanjith18*');
//       element(by.buttonText('Sign In')).click();

//       browser.sleep(10000)
//       element(by.id('outlined-adornment-password-login')).sendKeys('#aA123456');
//       element(by.name('confirmPassword')).sendKeys('#aA123456');
//       element(by.buttonText('Change Password')).click();
//       browser.sleep(10000)
// })
    // it("login sucessful",()=>{
    //     // element(by.css('.icon.icon-tabler.icon-tabler-menu-2',)).click();
    //     // element(by.css('.MuiTypography-root.MuiTypography-h5.css-1159lsg-MuiTypography-root',)).click();
    //     browser.sleep(10000)


    // })
    // it("add users",()=>{
    //     // element(by.css('.icon.icon-tabler.icon-tabler-menu-2',)).click();
    //     element(by.cssContainingText('.MuiTypography-root.MuiTypography-body1.css-19u81b4-MuiTypography-root','Users')).click();
       

    //     browser.sleep(10000)
    //     element(by.buttonText('Add User')).click();
    //     element(by.id('mui-1')).sendKeys('Tinu');
    //     element(by.id('mui-2')).sendKeys('tinu@gmail.com');
    //     element(by.id('mui-3')).sendKeys('8344546465');
    //     element(by.buttonText('Save changes')).click();
    //     browser.sleep(10000)
    // })
    

     it("add pharmacy",()=>{

        // element(by.css('.icon.icon-tabler.icon-tabler-menu-2',)).click();
        element(by.buttonText('Pharmacy')).click();
        element(by.name('pharmacy_name')).sendKeys('Tinufy2fdgdgfdggdgdfy');
        element(by.id('outlined-select-currency')).click();
        element(by.cssContainingText('ul li','UAE')).click()
        element(by.name('phone_number')).sendKeys('8344578765');
        element(by.name('physical_address')).sendKeys('Tinuamailcom');
        element(by.name('description_value')).sendKeys('Tgdgfgin');
        element(by.buttonText('Save changes')).click();
        // expect(element(by.tagName('p')).getText()).toBe('Pharmacy name already exist')
        //     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
    //    expect(element.all(by.cssContainingText('MuiTypography-root.MuiTypography-body1.css-11081i3-MuiTypography-root p','Pharmacy name already exist')).isPresent()).toBe(false);
       
       expect(element(by.cssContainingText('p','Pharmacy name already exist')).isPresent()).toBe(false,'Pharmacy name already exist')
       expect(element(by.cssContainingText('p','"Pharmacy Name" length must be less than or equal to 30 characters long')).isPresent()).toBe('"Pharmacy Name" length must be less than or equal to 30 characters long')
       expect(element(by.cssContainingText('p','"Pharmacy Name" length must be at least 3 characters long')).isPresent()).toBe('"Pharmacy Name" length must be at least 3 characters long')
       expect(element(by.cssContainingText('p','pharmacy_name is a required field')).isPresent()).toBe('pharmacy_name is a required field')
       
       expect(element(by.cssContainingText('p','Please select country code.')).isPresent()).toBe(false,'Please select country code.')
       
       expect(element(by.cssContainingText('p','Phone number is not valid')).isPresent()).toBe(false,'Phone number is not valid')
       expect(element(by.cssContainingText('p','"Phone Number" length must be 10 characters long')).isPresent()).toBe(false,'"Phone Number" length must be 10 characters long')
       expect(element(by.cssContainingText('p','phone_number is a required field')).isPresent()).toBe('phone_number is a required field')
       
       expect(element(by.cssContainingText('p','physical_address must be at least 6 characters')).isPresent()).toBe(false,'physical_address must be at least 6 characters')
       expect(element(by.cssContainingText('p','physical_address must be at most 50 characters')).isPresent()).toBe(false,'physical_address must be at most 50 characters')
       expect(element(by.cssContainingText('p','physical_address is a required field')).isPresent()).toBe('physical_address is a required field')
       
       expect(element(by.cssContainingText('p','description_value must be at least 5 characters')).isPresent()).toBe(false,'description_value must be at least 5 characters')
       expect(element(by.cssContainingText('p','description_value must be at most 150 characters')).isPresent()).toBe(false,'description_value must be at most 150 characters')
       expect(element(by.cssContainingText('p','description_value is a required field')).isPresent()).toBe('description_value is a required field')
       browser.sleep(10000)
     })



// it("table click",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Users')).click();
//     element(by.buttonText('User')).click();
//     browser.sleep(10000)
//     element(by.name('name')).sendKeys('Tinua');
//     element(by.name('email')).sendKeys('Tinua@gmail.com');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('mobileNumber')).sendKeys('8344546465');

//     browser.sleep(10000)
//         element(by.buttonText('Save changes')).click();
//         browser.sleep(10000)

//     browser.sleep(10000)

// })

// it("add store",()=>{
 
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element(by.buttonText('Store')).click();
    
//     element(by.name('storeName')).sendKeys('Tinua123');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','UAE')).click()
//     element(by.name('phoneNumber')).sendKeys('8344546465');
//     element(by.name('address')).sendKeys('Tefeffdfd');
//     element(by.name('description_value')).sendKeys('Tinua@gmailfdfdfom');

//     // element(by.id('mui-29')).sendKeys('Tinua@gmailfdfdfom');

//     element(by.name('drugs')).sendKeys('ifdfdfsfdfcom');

//     element(by.buttonText('Save changes')).click();
        

   

// })
// it("Edit store",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Edit')).last().click();
//     element(by.name('storeName')).clear().sendKeys('Tinu123a');
//     element(by.id('outlined-select-currency')).click();
//     element(by.cssContainingText('ul li','Somalia')).click()
//     element(by.name('phoneNumber')).clear().sendKeys('9633807976');
//     element(by.name('address')).clear().sendKeys('address');
//     element(by.name('description_value')).clear().sendKeys('description');
//     element(by.name('drugs')).clear().sendKeys('drugcalpol');
//     browser.sleep(10000)
//     element(by.buttonText('Update changes')).click();
// })


// it("Delete store",()=>{
//     element(by.cssContainingText('table tr td', 'A12pharmacy')).click();
//     element(by.cssContainingText('a', 'Stores')).click();
//     element.all(by.cssContainingText('table tr td svg','')).get(0).click();
//     element.all(by.cssContainingText('ul li p','Delete')).last().click();
//     element(by.buttonText('Delete')).click();
// })


})
   
