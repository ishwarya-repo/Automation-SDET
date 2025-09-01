//Tells WebDriver to wait a certain time when trying to find an element if it’s not immediately available.

const { Builder, By } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://example.com");

    // Set implicit wait (10 seconds)
    await driver.manage().setTimeouts({ implicit: 10000 });

    // This will wait up to 10 seconds before throwing error
    let element = await driver.findElement(By.id("username"));
    await element.sendKeys("Ishwarya");
  } finally {
    await driver.quit();
  }
})();

//Waits for a specific condition to be true before proceeding.
const { Builder, By, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://example.com");

    // Explicit wait: wait until element is visible
    let element = await driver.wait(
      until.elementLocated(By.id("username")), // condition
      10000 // timeout (10 sec)
    );
    await driver.wait(until.elementIsVisible(element), 10000);

    await element.sendKeys("Ishwarya");
  } finally {
    await driver.quit();
  }
})();
