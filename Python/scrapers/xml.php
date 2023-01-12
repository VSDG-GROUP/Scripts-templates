<?php


$xml = file_get_contents('https://www.redfin.com/newest_listings.rss');


$fl = fopen('/var/www/mls.xml','w');
fwrite($fl,$xml);
fclose($fl);