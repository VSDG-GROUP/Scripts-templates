<?php

$xml = file_get_contents('php://input');
$xml = json_decode($xml,true);
$items = $xml['search'];

  if(!empty( $items['subj'])){
    if($items['code'] == 'vsdg'){
        exit;
    }
    $send = file_get_contents('/var/www/send', true);
    $subject = $items['subj'];
    foreach ($items as $key=>$value) {
        $body .= $key . ' : ' . $value . "<br>";
    }

    $body .= $items['device'] . "\r\n";
    $body .= $items['dimentions']. "\r\n";
    $body .= $items['os']. "\r\n";
    $body .= $items['redi']. "\r\n";
    $body .= $items['code']. "\r\n";
echo $body;

 require("/var/www/sendgrid-php/sendgrid-php.php");


 $email = new \SendGrid\Mail\Mail(); 
 $email->setFrom("noreply@vsdg.net", "Server");
 $email->setSubject($subject);
 $email->addTo("david@vsdg.net", "David");
 $email->addContent("text/plain", $body);
 $email->addContent(
     "text/html", $body
 );
 $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
 $sendgrid = new \SendGrid($send);
 try {
     $response = $sendgrid->send($email);
     print $response->statusCode() . "\n";
     print_r($response->headers());
     print $response->body() . "\n";
 } catch (Exception $e) {
     echo 'Caught exception: '. $e->getMessage() ."\n";
 }

 
  }

?>