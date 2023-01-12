import xml.etree.ElementTree as ET
feed_url = "/var/www/html/redfin-files/test.rss"


blog_feed = ET.parse(feed_url)

with open("/var/www/mls.xml", "w") as datafile:


   for exc in blog_feed.iter() :

         if "33024/" in exc.text: 
            if "link" in exc.tag:
               print(exc.tag, exc.text)
               datafile.write(str( blog_feed))


   #print(json.dumps( xmltodict.parse(feed_url, file=datafile)))
