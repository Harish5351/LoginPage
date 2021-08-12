module.exports =class Unit_Test{

    GetStarted = (when) =>{
    when(/^I click on get started "(.*)"$/, (GetStarted1) => {
       reporter.startStep("I click on get started");
       console.log("step1");
       this.getStarted = GetStarted1;
       console.log(GetStarted1); 
       reporter.endStep();
     
    });
    }
   
   Account = (and) =>
   {
    and(/^I click on Account "(.*)"$/, (account) => {
     reporter.startStep("I click on Account");
     console.log("step2");
     this.acc = account;
     console.log(account);
     reporter.endStep()
    });
   }
   
   SignIn = (and) =>{
   and(/^I click on SignIn "(.*)"$/, (signIn) => {
     reporter.startStep("I click on SignIn");
     console.log("step3");
     this.signin =signIn;
     console.log(signIn);
     reporter.endStep()
   });
   }
   
   Browser = (then) =>{
     then(/^It opens browser "(.*)"$/, (browser) => {
     reporter.startStep("It opens browser ");
     console.log("step4");
     this.fbrowser = browser;
     console.log(browser);
     reporter.endStep(); 
   });
  }

  ClickEmail = (and) => {
   when(/^I click on email and entered mail as "(.*)"$/, (email) => {
       reporter.startStep("I click on email and entered mail as")
       console.log("step5");
       this.mail =email;
       console.log(email);
       reporter.endStep()
     });
    }
   
    ClickPassword = (and) => {
     and(/^I click on pasword and entered password as  "(.*)"$/, (password) => {
         reporter.startStep("I click on pasword and entered password as")
         console.log("step6");
         this.pwd =password;
         console.log(password);
         reporter.endStep()
       });
      }
   
      CLickButton = (and) => {
       and(/^I click on SignIn Button "(.*)"$/, (button) => {
           reporter.startStep("User enter the number")
           console.log("step7");
           this.Button =button;
           console.log(button);
           reporter.endStep()
         });
        }
   
   checkResult = (then) => {
   then(/^It should login succefully "(.*)"$/, (result) => {
     reporter.startStep("It should login succefully "+result);
     console.log("step8");
     this.rslt = result;
     console.log(result);
     reporter.endStep()
     
   });
   
    }
   }
   