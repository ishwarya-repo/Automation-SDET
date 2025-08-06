const { Builder, By, Key } = require('selenium-webdriver');

async function login() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get("https://practicetestautomation.com/practice-test-login");

    await driver.findElement(By.id("username")).sendKeys("ISHWARYA");

    await driver.findElement(By.id("password")).sendKeys("mypassword");

    await driver.findElement(By.css("button[type='submit']")).click();

  } finally {
    await driver.sleep(2000);
    await driver.quit();
  }
}
//

