<?php



$xml = file_get_contents('php://input');
$xml = json_decode($xml,true);

$items = $xml['search'];
$items['dir'] = '/var/www/json/';
$control = $items['function'];
if($control != ""){
    


function getUserIP()
{
    // Get real visitor IP behind CloudFlare network
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
              $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
              $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}


$user_ip = getUserIP();





if($items['link'] == ''){
    $items['link'] = $user_ip;
}










function createLead($items) 
{
    $code = $items['code'];
    $rootPath = $items['dir'];


    if (in_array($code, array("Landing", "Exit", "exit","landing"))){
       exit;

        
    } 


    $date = date(m_d);
    $yesterday = date('m_d', strtotime("yesterday"));
    

    if (!file_exists($rootPath.'json')) {
        mkdir($rootPath.'json', 0777, true);
    }


    if(is_file($rootPath."json/${yesterday}.json")){
    unlink($rootPath."json/${yesterday}.json");
    }






    if(is_file($rootPath."json/${date}.json")){

    $handle = fopen($rootPath."json/${date}.json", 'r+');


    } else {
        $handle = fopen($rootPath."json/${date}.json", 'w+');
    }
    if ($handle)
    {
    // seek to the end
    fseek($handle, 0, SEEK_END);

    // are we at the end of is the file empty
    if (ftell($handle) > 0)
    {
        // move back a byte
        fseek($handle, -1, SEEK_END);

        // add the trailing comma
        fwrite($handle, ',', 1);

        // add the new json string
        fwrite($handle, json_encode($items) . ']');
        $handle = json_encode($handle,JSON_PRETTY_PRINT);

    }
    else
    {
        // write the first event inside an array
        fwrite($handle, json_encode(array($items)));
        $handle = json_encode($handle,JSON_PRETTY_PRINT);

    }

        // close the handle on the file
        fclose($handle);
        post($items);
    }
    exit;

}



function rate($items)
{

        $street = $items['address'];
        $city = $items['city'];
        $state = $items['state'];
        $zip = $items['zip'];
        $rootPath = $items['dir'];

                if(!empty($street)){
                
                
                                
                $first_add = "$street $city";
                $second_add = "$state $zip";
                
                $url = "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?address1=".rawurlencode($first_add)."&address2=" .rawurlencode($second_add);


                $curl = curl_init(); 
                curl_setopt_array($curl, array( 
                    CURLOPT_URL => $url,
                    CURLOPT_RETURNTRANSFER => true, 
                    //CURLOPT_ENCODING => "", 
                    //CURLOPT_MAXREDIRS => 10, 
                    //CURLOPT_TIMEOUT => 30, 
                    //CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1, 
                    CURLOPT_CUSTOMREQUEST => "GET", 
                    CURLOPT_HTTPHEADER => array( 
                    "accept: application/json", 
                    //"apikey: aa5d63dc58f6795d2df1f71329404bdd", 
                    "apikey: c72d5f1750d761744015be7d4ca3d1ae", 
                    ), 
                )); 
                $response = curl_exec($curl); 
                $err = curl_error($curl); 
                curl_close($curl); 
                if ($err) { 
                    $jsonFile->error = $err; 
                    
                
                } else { 
                    
                    echo $xml->status->msg;

                    $xml = json_decode($response);
                    $jsonFile->status = $xml->status->msg;
                    $jsonFile->poolind = $xml->property["0"]->lot->poolind;
                    $jsonFile->frontage = $xml->property["0"]->lot->frontage;
                    $jsonFile->lotnum = $xml->property["0"]->lot->lotnum;
                    $jsonFile->lotsize1 = $xml->property["0"]->lot->lotsize1;
                    $jsonFile->lotsize2 = $xml->property["0"]->lot->lotsize2;
                    $jsonFile->blockNum = $xml->property["0"]->area->blockNum;
                    $jsonFile->loctype = $xml->property["0"]->area->loctype;
                    $jsonFile->countrysecsubd = $xml->property["0"]->area->countrysecsubd;
                    $jsonFile->countyuse1 = $xml->property["0"]->area->countyuse1;
                    $jsonFile->muncode = $xml->property["0"]->area->muncode;
                    $jsonFile->munname = $xml->property["0"]->area->munname;
                    $jsonFile->srvyRange = $xml->property["0"]->area->srvyRange;
                    $jsonFile->srvySection = $xml->property["0"]->area->srvySection;
                    $jsonFile->srvyTownship = $xml->property["0"]->area->srvyTownship;
                    $jsonFile->subdname = $xml->property["0"]->area->subdname;
                    $jsonFile->taxcodearea = $xml->property["0"]->area->taxcodearea;
                    $jsonFile->country = $xml->property["0"]->address->country;
                    $jsonFile->countrySubd = $xml->property["0"]->address->countrySubd;
                    $jsonFile->postal2 = $xml->property["0"]->address->postal2;
                    $jsonFile->postal3 = $xml->property["0"]->address->postal3;
                    $jsonFile->latitude = $xml->property["0"]->location->latitude;
                    $jsonFile->longitude = $xml->property["0"]->location->longitude;
                    $jsonFile->absenteeInd = $xml->property["0"]->summary->absenteeInd;
                    $jsonFile->propclass = $xml->property["0"]->summary->propclass;
                    $jsonFile->propsubtype = $xml->property["0"]->summary->propsubtype;
                    $jsonFile->proptype = $xml->property["0"]->summary->proptype;
                    if($xml->property["0"]->summary->yearbuilt){

                    $jsonFile->yearbuilt = $xml->property["0"]->summary->yearbuilt;
                    $yearbuilt = $xml->property["0"]->summary->yearbuilt;
                    }
                    $jsonFile->propLandUse = $xml->property["0"]->summary->propLandUse;
                    $jsonFile->propIndicator = $xml->property["0"]->summary->propIndicator;
                    $jsonFile->legal1 = $xml->property["0"]->summary->legal1;
                    $jsonFile->coolingtype = $xml->property["0"]->utilities->coolingtype;
                    $jsonFile->energyType = $xml->property["0"]->utilities->energyType;
                    $jsonFile->universalsize = $xml->property["0"]->building->size->universalsize;
                    $jsonFile->sizeInd = $xml->property["0"]->building->size->sizeInd;
                    $jsonFile->bathsfull = $xml->property["0"]->building->rooms->bathsfull;
                    $jsonFile->bathstotal = $xml->property["0"]->building->rooms->bathstotal;
                    $jsonFile->beds = $xml->property["0"]->building->rooms->beds;
                    $jsonFile->floors = $xml->property["0"]->building->interior->floors;
                    $jsonFile->condition = $xml->property["0"]->building->construction->condition;
                    $jsonFile->constructiontype = $xml->property["0"]->building->construction->constructiontype;
                    $jsonFile->foundationtype = $xml->property["0"]->building->construction->foundationtype;
                    $jsonFile->frameType = $xml->property["0"]->building->construction->frameType;
                    $jsonFile->roofcover = $xml->property["0"]->building->construction->roofcover;
                    $jsonFile->roofShape = $xml->property["0"]->building->construction->roofShape;
                    $jsonFile->wallType = $xml->property["0"]->building->construction->wallType;
                    $jsonFile->bldgsNum = $xml->property["0"]->building->summary->bldgsNum;
                    $jsonFile->levels = $xml->property["0"]->building->summary->levels;
                    $jsonFile->quality = $xml->property["0"]->building->summary->quality;
                    $jsonFile->view = $xml->property["0"]->building->summary->view;
                    $jsonFile->yearbuilteffective = $xml->property["0"]->building->summary->yearbuilteffective;
                    $yearefective = $xml->property["0"]->building->summary->yearbuilteffective;
                }




                if($yearbuilt <= "2001"){
                $yearb = "older";
                } else {
                    $yearb = "newer";
                }
                if($yearbuilt == ""){
                    $yearb == "newer";
                }
                $pre = file_get_contents($rootPath.'e.json');
                $pre = json_decode($pre);

                $jsonFile->Dwelling = $pre->coverage->header[2];
                $jsonFile->Structures = $pre->coverage->header[3];
                $jsonFile->personal = "Personal Property";
                $jsonFile->Loss = $pre->coverage->header[5];
                $jsonFile->Liability = $pre->coverage->header[6];
                $jsonFile->Medical = $pre->coverage->header[7];
                $jsonFile->Hurricane = $pre->coverage->header[8];
                $jsonFile->Peril = $pre->coverage->header[9];
                $jsonFile->Premium = $pre->coverage->header[10];
                $jsonFile->coverage_amount = $pre->coverage->coverage_amount->dwelling_Coverage;
                $jsonFile->other_Structures  = $pre->coverage->coverage_amount->other_Structures;
                $jsonFile->personal_Property = $pre->coverage->coverage_amount->personal_Property;
                $jsonFile->loss_of_use = $pre->coverage->coverage_amount->loss_of_use;
                $jsonFile->personal_Liability = $pre->coverage->coverage_amount->personal_Liability;
                $jsonFile->medical_Payments = $pre->coverage->coverage_amount->medical_Payments;
                $jsonFile->hurricane_Deductible = $pre->coverage->coverage_amount->hurricane_Deductible;
                $jsonFile->Peril_other = $pre->coverage->coverage_amount->Peril;

                $jsonFile->premium = $pre->coverage->zip[0]->$yearb->$zip;
                $premium = $pre->coverage->zip[0]->$yearb->$zip;

                echo json_encode($jsonFile);
        

                class hone {
                    public $yearbuilt;
                    public $premium;

                }


  

    }
 exit;

}

function post($items) 
{
    $code = $items['code'];
    $subj = $items['subj'];
    $link = $items['link'];
    $first = $items['first'];
    $last = $items['last'];
    $phone = $items['phone'];
    $email = $items['email'];
    $street = $items['address'];
    $city = $items['city'];
    $state = $items['state'];
    $zip = $items['zip'];
    $in = $code;
    $rootPath = $items['dir'];


    $subject = "$subj $code";



    foreach ($items as $key => $value) {
        $body .= $key . ' : ' . $value . "\r\n";
    }

   

        $body .= "https://whatismyipaddress.com/ip/${link}\r\n";
      
            $body .= $_SERVER['HTTP_REFERER'] . "\r\n";
  
    
        if (in_array($code, array("vsdg", "prev", "elem","wp-admin",'test'))){
            $to = "drodriguez@safeguardcasualty.com";
            $subject = "Testing $code $subj";

            
        } else {
           $to = "drodriguez@safeguardcasualty.com";

            
        }
    
    
        if($subject == ''){
            $subject = "No info provided $root";
        }




    $from = $in . '@' . $_SERVER['HTTP_HOST'];
    $headers = "From: " .$from;
    
    


        
    
    
    mail($to, $subject, $body, $headers);

        echo 'sent';
        echo $code;
    exit;

}

function readJs($items)
{
    $json = $items['json'];
    $county = $items['county'];
    $rootPath = $items['dir'];
    if($json == ""){
        echo 'Missing json command';
        echo $json;

    }
    $date = date(m_d);
    $yesterday = date('m_d', strtotime("yesterday"));

    if($json == 'date'){
        $file = $date;
    } else {
        $file = $json;
    }



    $content = file_get_contents($rootPath."json/${file}.json");
    $rate = json_decode($content,true);
    

    if($json == 'auto'){
        $output = array();
        foreach($rate as $key){
        foreach($key['Rates'] as $rt => $vl){
        if($vl['Name'] == $county){  
       

        $output[] = array(
        "carrier" => $key['Name'],
        'name'=> $vl['Name'],
        'rate_low'=>$vl['Rate'],
        'rate_high'=>$vl['Rate2']
    
        );
        }
    }
    }
    header("Content-type: application/json");
    echo json_encode($output);
    } else {
    echo $content;
    }


    


    exit;
}











function js($items)
{

    
    $url = $items['url'];
    $dir = $items['dir'];

    




    
    $checkHttp =substr($url, 0, 4);
    if( $checkHttp != 'http'){
        $url = "${dir}${url}";
    } 


    
    $content = file_get_contents($url);
    header("Content-Type: application/json");

    

    echo $content;
    exit;
}












if(!empty($control))
{
    if($control == 'post'){
        post($items);
    } elseif( $control == 'createLead'){
        createLead($items);
     }elseif( $control == 'rate'){
        rate($items);
    } elseif( $control == 'readJs'){
        readJs($items);
    } elseif( $control == 'js'){
        js($items);
    }
    } 


}


