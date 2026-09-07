# language: en
Feature: E-Commerce Product Search and Purchase Flow

  Background:
    Given User is on the login page "https://www.saucedemo.com/"
    When User enters username "standard_user" and password "secret_sauce"
    And User clicks on the login button
    Then User should be redirected to the inventory page

  Scenario Outline: Successful search, add to cart, and checkout process
    When User searches for the product "<product_name>"
    And User adds "<product_name>" to the shopping cart
    And User opens the shopping cart
    And User clicks on the checkout button
    And User fills in checkout information with firstname "<firstname>", lastname "<lastname>", and postal code "<postal_code>"
    And User completes the purchase by clicking the finish button
    Then User should see the order completion message "Thank you for your order!"

    Examples:
      | product_name          | firstname | lastname | postal_code |
      | Sauce Labs Backpack   | Furkan    | Kerse    | 06000       |