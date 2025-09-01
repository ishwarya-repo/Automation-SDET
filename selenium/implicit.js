const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Set implicit wait (10 seconds)
    await driver.manage().setTimeouts({ implicit: 10000 });

    await driver.get('https://example.com');

    let element = await driver.findElement(By.id('username'));
    await element.sendKeys('myUser');

  } finally {
    await driver.quit();
  }
})();