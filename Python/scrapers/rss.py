#https://www.redfin.com/newest_listings.rss

import feedparser
# url of blog feed
feed_url = "https://www.redfin.com/newest_listings.rss"

blog_feed = feedparser.parse(feed_url)


#print(blog_feed)


with open("mls.xml", "w") as datafile:
    print(blog_feed, file=datafile)

# returns title of the blog site
#blog_feed.feed.title

# returns the link of the blog
# and number of entries(blogs) in the site.
#blog_feed.feed.link
#len(blog_feed.entries)

# Details of individual blog can
# be accessed by using attribute name
#print(blog_feed.entries[0].title)
#print(blog_feed.entries[0].link)
#print(blog_feed.entries[0].author)
#print(blog_feed.entries[0].published)




