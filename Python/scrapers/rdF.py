from redfin import Redfin
import json
ADDRESS = 'Hollywood. FL'

engine = Redfin()

response = engine.search(ADDRESS)

url = response['payload']['exactMatch']['url']
data = engine.initial_info(url)['payload']
#property_id = data['propertyId']
#preloadImageUrls = data['preloadImageUrls']
#listing_id = data['listing_id']
#owner_estimate = data['']

URL_REQUESTS = [
engine.page_tags,
engine.primary_region
]
PROPERTY_ID_REQUESTS = [
engine.hood_photos,
engine.more_resources,
engine.page_header,
engine.property_comments,
engine.building_details_page,
engine.owner_estimate,
engine.claimed_home_seller_data,
engine.cost_of_home_ownership
]
LISTING_ID_REQUESTS = [
engine.floor_plans,
engine.tour_list_date_picker
]
PROPERTY_REQUESTS = [
engine.similar_listings,
engine.similar_sold,
engine.nearby_homes,
engine.above_the_fold,
engine.below_the_fold,
engine.property_parcel,
engine.activity,
engine.customer_conversion_info_off_market,
engine.rental_estimate,
engine.avm_historical,
engine.info_panel,
engine.descriptive_paragraph,
engine.avm_details,
engine.tour_insights,
]

# TODO test these resources
OTHER_REQUESTS = [
    engine.stats,
    engine.shared_region
]

def test_request_group(fns, *args):
    for fn in fns:
        fn(*args)

#test_request_group(URL_REQUESTS, url)
#test_request_group(PROPERTY_ID_REQUESTS, property_id)
#test_request_group(LISTING_ID_REQUESTS, listing_id)
#test_request_group(PROPERTY_ID_REQUESTS, owner_estimate)
#test_request_group(PROPERTY_REQUESTS, property_id)

#print(LISTING_ID_REQUESTS, listing_id)
#print(PROPERTY_ID_REQUESTS, owner_estimate)
#print(PROPERTY_REQUESTS, property_id)

print(data)