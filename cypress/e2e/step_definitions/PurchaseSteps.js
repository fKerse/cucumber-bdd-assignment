import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import sauceDemoPage from '../pages/SauceDemoPage'; // Harf büyüklüğüne ve ../ yapısına dikkat!

Given('User is on the login page {string}', (url) => {
  sauceDemoPage.visit();
});

When('User enters username {string} and password {string}', (username, password) => {
  sauceDemoPage.login(username, password);
});

When('User adds product to the shopping cart', () => {
  sauceDemoPage.addToCart();
});

When('User opens the shopping cart', () => {
  sauceDemoPage.goToCart();
});

When('User clicks on the checkout button', () => {
  sauceDemoPage.checkout();
});

When('User fills in checkout information with firstname {string}, lastname {string}, and postal code {string}', (firstName, lastName, postalCode) => {
  sauceDemoPage.fillCheckoutInfo(firstName, lastName, postalCode);
});

When('User completes the purchase by clicking the finish button', () => {
  sauceDemoPage.finishOrder();
});

Then('User should see the order completion message {string}', (expectedMessage) => {
  sauceDemoPage.verifySuccessMessage(expectedMessage);
});