Feature: Login feature

Scenario: Verifying succeful Login with valid data
When I click on Get Started
And I click on Account 
And I click on SignIn
Then It opens browser
And I click on email and entered mail as "hekal@pointhealth.com"
And I click on pasword and entered password as "Harry5351"
And I click on SignIn Button
Then It should login succefully   