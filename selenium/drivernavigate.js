const { Builder, By } = require('selenium-webdriver');

async function input() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log("Opening LetCode page...");
    await driver.get("https://letcode.in/buttons");
    await driver.sleep(2000);

    // Click home and go back
    console.log("Clicking 'Home' and navigating back...");
    await driver.findElement(By.id("home")).click();
    await driver.sleep(2000);
    await driver.navigate().back();
    await driver.sleep(2000);

    // Get X & Y coordinates
    const pos = await driver.findElement(By.id("position")).getRect();
    console.log(`X: ${pos.x}, Y: ${pos.y}`);

    // Get background color
    const color = await driver.findElement(By.id("color")).getCssValue("background-color");
    console.log(`Color: ${color}`);

    // Get height and width
    const size = await driver.findElement(By.id("property")).getRect();
    console.log(`Height: ${size.height}, Width: ${size.width}`);

    // Is disabled?
    const isEnabled = await driver.findElement(By.id("isDisabled")).isEnabled();
    console.log(`Is 'Disabled' button enabled?: ${isEnabled}`);

    // Long press
    const longPressBtn = await driver.findElement(By.id("longpress"));
    const actions = driver.actions({ async: true });
    await actions.move({ origin: longPressBtn }).press().pause(2000).release().perform();

    await driver.sleep(2000);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    console.log("Test done. Closing browser...");
    await driver.quit();
  }
}
input();
