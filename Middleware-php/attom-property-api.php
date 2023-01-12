<?php 


$root = $_SERVER['DOCUMENT_ROOT']; 

$json2 = file_get_contents('php://input');
$json4 = json_decode($json2,true);
$items = $json4['search'];

$code = $items['code'];
$subj = $items['subj'];
$link = $items['ip'];
$street = $items['address'];
$city = $items['city'];
$state = $items['state'];
$zip = $items['zip'];



$first_add = "$street $city";
$second_add = "$state $zip";


if($code == 'test'){
    
}

if($first_add != ""){
  
  
  
  
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
        
    //var_dump($response) . "<br>";
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
      $year = $xml->property["0"]->building->summary->yearbuilteffective;
    }
}



if($yearbuilt <= "2001"){
    $year = "older";
    } else {
        $year = "newer";
    }
    if($year == ""){
        $year == "newer";
    }
    $pre = file_get_contents('../../e.json');
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

$jsonFile->premium = $pre->coverage->zip[0]->$year->$zip;

if( $jsonFile->status !== "Invalid Parameter Combination" || $jsonFile->status !== "SuccessWithoutResult"){
echo json_encode($jsonFile);



if($code == ''){
    $code = $_POST['code'];
}
if($subj == ''){
    $subj = $_POST['subj'];
}
if($link == ''){
    $link = $_POST['ip'];
}
if($link == ''){
    $link = $_SERVER['REMOTE_ADDR'];
}

        
    $subject = "$subj $code";
        
        if($link == ''){
        $link = $_POST['ip'];
        }
        foreach ($_POST as $key => $value) {
            $body .= $key . ' : ' . $value . "\r\n";
        }


        foreach ($jsonFile as $key => $value) {
            $body .= $key . ' : ' . $value . "\r\n";
        }
    
      // $body = var_dump($pre);

            $body .= "https://whatismyipaddress.com/ip/${link}\r\n";
            if ($_POST['redi'] == ''){
                $body .= $_SERVER['HTTP_REFERER'] . "\r\n";
            }
        
            if (in_array($code, array("vsdg", "prev", "elem","wp-admin",'test'))){
                $to = "drodriguez@safeguardcasualty.com";
            } else {
               $to = "drodriguez@safeguardcasualty.com";
                
            }
        
        $body .= $first_add. "<br>";
        $body .= $pool. "<br>";
        $body .= $yearbuilt. "<br>";

            if($in == ''){
                
                //$in = "main";
                $in =  $_SERVER['REMOTE_ADDR'];
    
            }
            if($subject == ''){
                $subject = $zip;
            }




        $email = 'drodriguez@safeguardcasualty.com'; 
        $from = $in . '@' . $_SERVER['HTTP_HOST'];
       //$body .= $json2;
        $headers = "From: " .$from;
        
        
        mail($to, $subject, $body, $headers);

}
















?>