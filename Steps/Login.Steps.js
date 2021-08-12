const { defineFeature, loadFeature } = require('jest-cucumber');
const Login_Test_Class = require("../Pages/Login_Test_Page")
const Login_obj  = new Login_Test_Class()

const feature = loadFeature('./Features/Login.feature',

);

defineFeature(feature, test => {
    test('Verifying succeful Login with valid data', ({ when, and, then }) => {
       Login_obj.getStarted(when);
       Login_obj.Account(and);
       Login_obj.SignIn(and);
       Login_obj.Browser(then);
       Login_obj.ClickEmail(and);
       Login_obj.ClickPassword(and);
       Login_obj.CLickButton(and);
       Login_obj.checkResult(then);
    });
     
  })
  