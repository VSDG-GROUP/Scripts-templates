<?php


$xml = file_get_contents("https://www.redfin.com/newest_listings.rss");
    $xml = str_replace(array("\n", "\r", "\t"), '', $xml);
    $xml = trim(str_replace('"', "'", $xml));
    $simpleXml = simplexml_load_string($xml);
    $json = json_encode($simpleXml);
    $itr = json_decode($json);
    
$fl = fopen('/var/www/mls.json','w');


fwrite($fl,$json);
fclose($fl);
