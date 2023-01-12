

from selenium import webdriver

driver = webdriver.Chrome('chromedriver.exe')
driver.get('https://www.instagram.com/vsdg_group/')
metas = driver.find_elements_by_tag_name('meta')
for elem in metas:
    if elem.get_attribute('property') == 'og:image':
        print(elem.get_attribute('content'))