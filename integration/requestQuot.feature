Feature: Request Quotation

@Tc-04
Scenario: Request Quotation calculate functionality test
    Given I login to DemoGuru insurance Site
    And I Navigate to Request Quotation Section
    And I enter all fileds
    When I Click on calculate Premium Button
    Then I see calculated Percentage on UI

@Tc-05
Scenario: Request Quotation reset functionality test
    Given I login to DemoGuru insurance Site
    And I Navigate to Request Quotation Section
    And I enter all fileds
    When I Click on reset Button
    Then I see all text area are blank

@@Tc-06
Scenario: Request Quotation save functionality test
    Given I login to DemoGuru insurance Site
    And I Navigate to Request Quotation Section
    And I enter all fileds
    When I Click on save Button
    Then I navigate to saved details page