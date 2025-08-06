
const { Builder, By, Key } = require('selenium-webdriver');

async function input() {
  let driver = await new Builder().forBrowser('chrome').build();
  //enter a name
  await driver.findElement(By.id("fullName").sendKeys("Ishh"));
  //append a text and press key tab
  await driver.findElement(By.id("join").sendKeys("lEARNING").Key.TABS);
  //What is inside the text box
 await driver.findElement(By.id("getMe").insideValue);
 //Clear the text
await driver.findElement(By.id("clearMe").clear());
//field disabled check
await driver.findElement(By.id("noEdit").isEnabled());
//read only
await driver.findElement(By.id("dontwrite").getAttribute("readonly"))

}

