Feature: Happy path account creation scenarios

  @demo_paralall
  Scenario Outline: User can create account with valid details


    Given User is in home page
    When he navigates to login page
    And he navigates to register page
    Then he should be in registration page
    When he creates account with details <firstName>, <LastName>, <Email> and <Password>
    Then the account should be created successfully

    Examples:
      | firstName | LastName | Email         | Password  |
      | autouser  | tester   | test@test.com | password1 |













