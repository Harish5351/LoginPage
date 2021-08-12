const setJestCucumberConfiguration = require('jest-cucumber').setJestCucumberConfiguration;
nconf = require('nconf');
nconf.file({ file: './Resources/config.json' });
base_obj =require('./Pages/Base_Page');

setJestCucumberConfiguration({
  //tagFilter: '@demo1 and not @demo2'   //execute only demo1 & not demo2
  //tagFilter: '@demo1 and @demo2'       //execute if both tags are present
  //tagFilter: '@demo1 or @demo2'
  
  
});
jest.setTimeout(500000);
global.__app__= nconf.get('App:app_flag')
console.log(global.__app__)
global.__web__=nconf.get('Web:web_flag')
console.log(global.__web__)
beforeAll(()=> {
  
  console.log("Before All")
});

afterAll(() => {
  console.log("After All")
});

// beforeEach ( async()=>
// {
//   if (global.__app__ ==true)
//   {
//   console.log("Before Each for app")
//   console.log("Calling initialize app driver")
//   await base_obj.initialize_AppDriver()

//   }
//   if (global.__web__ ==true)
//   {
//   console.log("Before Each for web")
//   console.log("Calling initialize web driver")
//   await base_obj.initialize_WebDriver()
//   }
//   console.log("Before Each common")
    
// })

// afterEach(() => {
//     console.log("After each")
//     if (global.__app__ ==true)
//   {
//     base_obj.close_AppDriver();

//   }
//   if (global.__web__ ==true)
//   {
//     base_obj.close_WebDriver();
//   }
    
//   });
