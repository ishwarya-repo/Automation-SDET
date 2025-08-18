const { Builder, By } = require('selenium-webdriver');
const fs = require('fs');

(async function screenshotExample() {
  // Launch Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log("Opening the LetCode Buttons page...");
    await driver.get("https://letcode.in/button#google_vignette");

    // 1️⃣ Full Page Screenshot
    console.log("Taking full page screenshot...");
    let pageImage = await driver.takeScreenshot();
    fs.writeFileSync('./snaps/img1.png', pageImage, 'base64');
    console.log("✅ Full page screenshot saved as img1.png");

    // 2️⃣ Element Screenshot (Home button)
    console.log("Taking screenshot of the 'Home' button...");
    let homeButton = await driver.findElement(By.id("home"));
    let homeImage = await homeButton.takeScreenshot(true);
    fs.writeFileSync('./snaps/img2.png', homeImage, 'base64');
    console.log("✅ Element screenshot saved as img2.png");

    // 3️⃣ Section Screenshot (Info section)
    console.log("Taking screenshot of the info section...");
    let section = await driver.findElement(By.className("has-background-info-light"));
    let sectionImage = await section.takeScreenshot(true);
    fs.writeFileSync('./snaps/img3.png', sectionImage, 'base64');
    console.log("✅ Section screenshot saved as img3.png");

  } catch (err) {
    console.error("❌ Error occurred:", err);
  } finally {
    console.log("Closing the browser...");
    await driver.quit();
  }
})();
