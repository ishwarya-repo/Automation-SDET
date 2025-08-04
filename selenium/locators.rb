require <selenium:webdriver>
  
driver = Selenium::WebDriver.for :chrome
driver.find_element(:id, "username").send_keys("ishwarya")
driver.find_element(:id, "password").send_keys("ishh")
driver.find_element(:css, "button[type='submit']").click
</selenium:webdriver>