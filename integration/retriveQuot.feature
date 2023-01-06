Feature:retrive quotation

Scenario: retrive Quotation  test
    Given I login to DemoGuru insurance Site
    And I Navigate to retrive Quotation Section
    And i Enter quotation id
    When i click on retrive button
    Then i see retrived table on UI