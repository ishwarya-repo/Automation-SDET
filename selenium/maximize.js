const { Builder } = require("selenium-webdriver");

(async function maximizeExample() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.google.com");

    await driver.manage().window().maximize();

  } finally {
    await driver.quit();
  }
})();
