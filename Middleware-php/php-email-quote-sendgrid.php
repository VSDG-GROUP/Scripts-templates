<?php

declare(strict_types=1);


$address = $_GET['add'];
//$city = $_GET['city'];

$year = $_GET['yr'];
$val = $_GET['zip'];
$first = $_GET['first'];
$last = $_GET['last'];
$to = $_GET['to'];

$xml = file_get_contents('php://input');
$xml = json_decode($xml);
$send = file_get_contents('/home/forge/quote.txt', true);
$atom = file_get_contents('/home/forge/atom.txt', true);
//$items = $xml['search;


if($val == ""){
    $val = $xml->zip;

}

if($first == ""){
$first = $xml->first;
    
}
if($last == ""){
$last = $xml->last;
    
}
if($to == ""){
$to = $xml->to;
    
}

if($to == ""){
    $to = 'drodriguez@safeguardcasualty.com';
}

if($address == ""){
    $address = $xml->add;
}

if($address == ""){
    //$address = '661 n 74th ave';
}




if($city == ""){


  
    $url = "http://ziptasticapi.com/" . $val;
    
    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  
    
    $resp = curl_exec($curl);
    curl_close($curl);
    $resp = json_decode($resp);
   
    
    
    
$country = $resp->country;
  if($state == ""){
    $state = $resp->state;
  }
  
  
  
    $city = $resp->city;
    }
    



if($address != "" || $yearbuilt != ""){
    $first_add = "$address $city";
    $second_add = "$state $val";
  
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
    "apikey: $atom", 
  ), 
)); 
$response = curl_exec($curl); 
$err = curl_error($curl); 
curl_close($curl); 
if ($err) { 
  $jsonFile->error = $err; 
    

} else { 
    
    $xml = json_decode($response);
    $yearbuilt = $xml->property['0']->summary->yearbuilt;
}
}


$xml = file_get_contents('/home/forge/e.json');
$xml = json_decode($xml);

$Dwelling = json_encode($xml->coverage->header[2]);
$Structures = json_encode($xml->coverage->header[3]);
$personal = "Personal Property";
$Loss = json_encode($xml->coverage->header[5]);
$Liability = json_encode($xml->coverage->header[6]);
$Medical = json_encode($xml->coverage->header[7]);
$Hurricane = json_encode($xml->coverage->header[8]);
$Peril = json_encode($xml->coverage->header[9]);
$Premium = json_encode($xml->coverage->header[10]);



$coverage_amount = json_encode($xml->coverage->coverage_amount->dwelling_Coverage);
$other_Structures  = json_encode($xml->coverage->coverage_amount->other_Structures);
$personal_Property = json_encode($xml->coverage->coverage_amount->personal_Property);
$loss_of_use = json_encode($xml->coverage->coverage_amount->loss_of_use);
$personal_Liability = json_encode($xml->coverage->coverage_amount->personal_Liability);
$medical_Payments = json_encode($xml->coverage->coverage_amount->medical_Payments);
$hurricane_Deductible = json_encode($xml->coverage->coverage_amount->hurricane_Deductible);
$Peril_other = json_encode($xml->coverage->coverage_amount->Peril);

if($year == ""){
    $year = $yearbuilt;
}
if($year <= "2001"){
    $quote = 'older';
} else {
    $quote = "newer";
}

$premium = json_encode($xml->coverage->zip[0]->$quote->$val);


//$premium = json_encode($xml->coverage->zip->$val);
//$premium = json_encode($xml->coverage->zip[0]->$home->$val);





function messageSent() {
       
    $mess = $address;
    $mess .= $first;
    $mess .= $last;
    $mess .= $val;
    $mess .= $yearbuilt;
    $mess .= $premium;
    //$message .= $premium;
    $subj = "Message sent to $first,  $premium lowest rate in zip $val";
    
    
    $head  = "From: " . 'Quote@insurancenetwork.agency' . "\r\n";
    $head .= "Reply-To: " . 'Quote@insurancenetwork.agency' . "\r\n";
    //$headers .= "CC: susan@example.com\r\n";
    //$headers .= "MIME-Version: 1.0\r\n";
    //$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $admin = 'drodriguez@insurancenetwork.agency';
    
        mail($admin, $subj, $mess, $head);
    }








//$message .= $premium;
//$subject = "Message sent to $first,  $premium lowest rate in zip $val";




if($val == ""){
    $to = "drodriguez@safeguardcasualty.com";
}
if($premium == ""){
    $admin = "drodriguez@safeguardcasualty.com";

    $headers  = "From: " . 'test' . '@' . $_SERVER['HTTP_HOST'] . "\r\n";
    $headers .= "Reply-To: " . 'test' . '@' . $_SERVER['HTTP_HOST'] . "\r\n";
    //$headers .= "CC: susan@example.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
$message = $address .'<br>';
$message .= $first .'<br>';
$message .= $last .'<br>';
$message .= $val .'<br>';
$message .= $yearbuilt .'<br>';
$message .= $premium .'<br>';
mail($admin, $subject, $message, $headers);

}
$first = ucfirst($first);
if($premium == ""){
    $premium == '____';
    $bcc = 'drodriguez@safeguardcasualty.com';
} else {
    $bcc ='admin@safeguardcasualty.com';
}
require '/home/forge/hook/vendor/autoload.php';
//echo $send;
use \SendGrid\Mail\Mail;

$email = new Mail();
// Replace the email address and name with your verified sender
$email->setFrom(
    'Quote@insurancenetwork.agency',
    'Insurance Network'
);
$email->setSubject("Hi  $first, we received your Home insurance quote request... $premium lowest rate in zip $val . Call when ready. InsuranceNetwork 1-877-613-5041");
// Replace the email address and name with your recipient
$email->addTo(
    $to,
    $first
);
$email->addBcc($bcc,'admin');


$htm = "<html>

<head>
<meta charset='UTF-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<meta name='viewport' content='width=device-width, initial-scale=1.0'>
    

</head>

<body style='
        font-family: arial;
        width:100%;
    '><div style='font-family:Arial, Helvetica, sans-serif;font-size:12pt;color:rgb(0, 0, 0);' class='yiv6147908492elementToProof'>
    <div style='font-family:arial;font-size:large;max-width:900px;margin:auto;'><span style='font-family:arial;font-size:large;margin:40px auto;'>Hello $first,</span>
    <div style='font-family:arial;font-size:large;margin:30px auto;'>We received your request for a Homeowners Insurance quote... Sorry we missed you.</div>
    <div style='font-family:arial;font-size:large;margin:30px auto;'>We are the InsuranceNetwork... We have every top-rated insurance company in Florida... Nobody beats our prices and service.</div>
    <div style='font-family:arial;font-size:large;margin:30px auto;'>Here is a quote of the lowest rate in zip code $val.</div>
    <div style='font-family:arial;font-size:large;margin:30px auto;'>Below is our contact information, should you have any questions and or would like to move forward.</div>
    </div>
    <div style='font-family:arial;font-size:large;margin:40px auto;'>
    <table style='margin:auto;width:700px;font-size:large;'>
    <tbody>
    <tr>
    <th style='background:lightblue;text-align:left;padding: 8pt;width: 300px;'>".json_decode($Dwelling)."</th>
    <th style='text-align:center;background:aliceblue;'>".json_decode($coverage_amount)."</th>
    </tr>
    <tr style='border:1px solid black;'>
    <th style='background:lightblue;text-align:left;padding: 8pt;width: 300px;'>".json_decode($Structures)."</th>
    <th style='text-align:center;background:aliceblue;'>".json_decode($other_Structures)."</th>
    </tr>
    <tr style='border:1px solid black;'>
    <th style='background:lightblue;text-align:left;padding: 8pt;width: 300px;'>".$personal."</th>
    <th style='text-align:center;background:aliceblue;'>".json_decode($personal_Property)."</th>
    </tr>
    <tr style='border:1px solid black;'>
    <th style='background:lightblue;text-align:left;padding: 8pt;width: 300px;'>".json_decode($Loss)."</th>
    <th style='text-align:center;background:aliceblue;'>".json_decode($loss_of_use)."</th>
    </tr>
    <tr style='border:1px solid black;'>
    <th style='background:lightblue;text-align:left;padding: 8pt;width: 300px;'>".json_decode($Liability)."</th>
    <th style='text-align:center;background:aliceblue;'>".json_decode($personal_Liability)."</th>
    </tr>
    <tr style='border:1px solid black;'>
    <th style='background:lightblue;text-align:left;padding: 8pt;width: 300px;'>".json_decode($Medical)."</th>
    <th style='text-align:center;background:aliceblue;'>".json_decode($medical_Payments)."</th>
    </tr>
    <tr style='border:1px solid black;'>
    <th style='background:lightblue;text-align:left;padding: 8pt;width: 300px;'>".json_decode($Hurricane)."</th>
    <th style='text-align:center;background:aliceblue;'>".json_decode($hurricane_Deductible)."</th>
    </tr>
    <tr style='border:1px solid black;'>
    <th style='background:lightblue;text-align:left;padding: 8pt;width: 300px;'>".json_decode($Peril)."</th>
    <th style='text-align:center;background:aliceblue;'>".json_decode($Peril_other)."</th>
    </tr>
    </tbody>
    </table>
    <table style='margin:auto auto;width:700px;text-align:center;font-size:24pt;'>
    <tbody>
    <tr style='border:1px solid black;'>
    <br>
    <th style='background:lightblue;'>".json_decode($Premium)."</th>
    </tr>
    <tr style='border:1px solid black;'>
    <th style='background:aliceblue;'>".json_decode($premium)."</th>
    </tr>
    </tbody>
    </table>
    </div>
    <div style='font-family:arial;font-size:large;max-width:900px;margin:12px auto;'>
    <div style='color:rgb(30, 159, 217);font-size:24pt;'><strong>Homeowner Insurance Coverage Definitions:</strong></div>
    <br>
    
    <div style='
    padding-inline: 20px;
'>
            <div style='
    margin: 10px auto;
'>
                <li style='
        list-style: none;
    '> <span style='
    color: #1e9fd9;white-space:nowrap;
'><strong>Dwelling:</strong></span> This covers your home and attached structures. It usually
                    includes plumbing, wiring, heating, and
                    permanently installed air conditioning in the event of a covered peril.
                </li>
            </div>
            <div style='
    margin: 10px auto;
'>
                <li style='
        list-style: none;
    '><span style='
    color: #1e9fd9;white-space:nowrap;
'><strong>Other structures:</strong></span>
                    Other structures or buildings, like guest houses, sheds, and fences, are also covered in
                    case of covered perils.
                </li>
            </div>

            <div style='
    margin: 10px auto;
'>
                <li style='
        list-style: none;
    '> <span style='
    color: #1e9fd9;white-space:nowrap;
'><strong>Personal property:</strong></span>
                    Your policy should reimburse you for covered damage or loss of your possessions. This
                    includes appliances, laptops, jewelry, and clothes, and they may even be covered if they are not on
                    your
                    property at the time of loss
                </li>
            </div>
            <div style='
        margin: 10px auto;
    '>
                <li style='
            list-style: none;
        '> <span style='
    color: #1e9fd9;white-space:nowrap;
'><strong>Loss of use:</strong></span>
                    This provides some reimbursement for additional living expenses if you need to vacate your home
                    during repairs or rebuilding.
                </li>
            </div>

            <div style='
    margin: 10px auto;
'>
               
                <li style='
        list-style: none;
    '> <span style='
    color: #1e9fd9;white-space:nowrap;
'><strong> Liability:</strong></span> This helps cover your financial losses if you are found responsible for damage or
                    injury to others.
                    In some cases, it may even cover legal defense against a claim.
                </li>
            </div>

            <div style='
    margin: 10px auto;
'>
                
                <li style='
        list-style: none;
    '> <span style='
    color: #1e9fd9;white-space:nowrap;
'><strong> Medical payments:</strong></span> Your policy should cover the medical bills of people injured on your
                    property
                </li>
            </div>
        </div>
<br>
    <div style='color:rgb(30, 159, 217);font-size:24pt;'><strong>InsuranceNetwork</strong></div>
    <div style='font-size:24pt;'>1-877-613-5041</div>
    <div style='color:rgb(30, 159, 217);'>Saving you money is our passion!</div>
    </div>
    <br>
    <br>
    <span style='font-family:arial;color:darkgray;font-size:10px;'>This offer and statements do not amend, modify or supplement any insurance coverage, it&#39;s simply a sample insurance quote that is subject to qualifications. This insurance quote is subject to terms,
     conditions, coverage, exclusions, which may or may not be available to you. Eligibility for this insurance product is subject to qualification and or the final determination of underwriting, qualifications and acceptance by an insurance company. Rates shown
     are subject to change at anytime for any reasons.</span><br>
    </div>


</body>

</html>";


$email->addContent(
    'text/html',
    "$htm"
);


//messageSent();


$sendgrid = new \SendGrid($send);
//$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
try {
    $response = $sendgrid->send($email);
    printf("Response status: %d\n\n", $response->statusCode());

    //$message .= json_encode($response->statusCode());

    $headers = array_filter($response->headers());
   // echo "Response Headers\n\n";
    foreach ($headers as $header) {
      //  echo '- ' . $header . "\n";
    }
} catch (Exception $e) {
    echo 'Caught exception: '. $e->getMessage() ."\n";
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php echo $htm;?>
</body>
</html>