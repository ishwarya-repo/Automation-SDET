const { Builder, By } = require('selenium-webdriver');

async function screenshot() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {

    
    await driver.get("https://letcode.in/alert"); 
    console.log("Clicking the button...");
    await driver.findElement(By.className("button is-link")).click();
    let alert = await driver.switchTo().alert();
    console.log("Alert text:", await alert.getText());
    await alert.accept();





  } finally {
    await driver.quit();
  }
}
screenshot();
