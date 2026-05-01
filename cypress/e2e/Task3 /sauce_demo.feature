Feature: SauceDemo main flows

  Scenario Outline: Login with multiple users
    Given I open SauceDemo login page
    When I login with username "<username>"
    Then I should see the products page

    Examples:
      | username                |
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |

  Scenario: Add a product to cart and start checkout
    Given I open SauceDemo login page
    When I login with username "standard_user"
    And I add "Sauce Labs Backpack" to the cart
    And I open the cart
    And I start checkout
    Then I should see the checkout information page

  Scenario: Logout successfully
    Given I open SauceDemo login page
    When I login with username "standard_user"
    And I logout
    Then I should be back on the login page
