const { Builder, By, Key } = require('selenium-webdriver');

async function input() {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get("https://letcode.in/button")
  //Goto Home and come back here using driver commanda
  await driver.findElement(By.id("home").click());
  await driver.navigate().back();
  //Get the X & Y co-ordinates
    await driver.findElement(By.id("position").getRect());
//Find the color of the button
await driver.findElement(By.id("color")).getCssValue("background-color");

//height and width 
await driver.findElement(By.id("property")).getRect();

//Confirm button is disabled
await driver.findElement(By.id("isDisabled")).isEnabled();
//long press and the button changes
await driver.findElement(By.id("isDisabled"));



//driver.get(url) - only the same page
//driver.navigate().to(url) - back -forwaaard

}