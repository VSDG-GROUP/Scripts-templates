from redfin import Redfin
import json
ADDRESS = 'hollywood Fl'

engine = Redfin()

response = engine.search(ADDRESS)

url = response['payload']['exactMatch']['url']
data = engine.initial_info(url)['payload']


print(data)