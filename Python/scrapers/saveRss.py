#https://www.redfin.com/newest_listings.rss

#import feedparser
# url of blog feed
import requests
feed_url = "https://www.redfin.com/newest_listings.rss"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36'}
#blog_feed = feedparser.parse(feed_url)


#print(blog_feed)
#with open(feed_url, 'r') as f:
 #   data = f.read() 
content = requests.get(feed_url,stream=True,headers=headers)

f = open("/var/www/mls.xml", "wb")
f.write(content)
f.close()




