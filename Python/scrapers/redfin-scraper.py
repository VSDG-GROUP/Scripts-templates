
import re
from selenium import webdriver

from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

options = Options()
options.headless = True

driver = webdriver.Firefox(options = options)
driver.get("https://www.redfin.com/zipcode/33025")
try:
    elements = WebDriverWait(driver, 5).until(
        EC.presence_of_all_elements_located((By.XPATH, "//div[contains(@class, 'info___')]"))
    )
    for el in elements:
        title = el.find_element_by_tag_name("a")
        date_desc = el.find_element_by_tag_name("p")
        title_text = re.search(r'(?<=\()[A-Z]+', title.text, re.I)[0]
        date_text = re.search(r'(?<=Trading: ).+', date_desc.text)[0]
        print(f'Title: {title_text}; Date: {date_text}')
finally:
    driver.quit()