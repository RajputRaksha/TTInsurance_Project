Feature: login module

@TC01
Scenario: Login Success
    Given I launch login page of DemoGuru
    And I enter Valid Email id
    And I enter Valid Password
    When I click on Login Button
    Then I see header in url

@tc02
Scenario: Login fail
    Given I launch login page of DemoGuru
    And I enter invalid Email id
    And I enter Valid Password
    When I click on Login Button
    Then I see error Message
@tc03
Scenario: Logout 
    Given I launch login page of DemoGuru
    And I enter Valid Email id
    And I enter Valid Password
    When I click on Login Button
    Then I see header in url
    Then I Logout Application
