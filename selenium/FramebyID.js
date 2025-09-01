const { Builder, By } = require("selenium-webdriver");

(async function frameByNameExample() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert");

    await driver.switchTo().frame("iframeResult");

    await driver.findElement(By.xpath("//button[text()='Try it']")).click();

    let alert = await driver.switchTo().alert();
    await alert.accept();
  } finally {
    await driver.quit();
  }
})();
