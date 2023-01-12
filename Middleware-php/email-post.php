<?php

$root = $_SERVER['DOCUMENT_ROOT']; 
$json = json_encode($_POST);
$json3 = json_decode($_POST);
$json2 = file_get_contents('php://input');
$json4 = json_decode($json2,true);
$items = $json4['search'];

$code = $items['code'];
$subj = $items['subj'];


if(isset($_POST['_id'])) {
    $id = $_POST['_id'];
}

    if(isset($_POST['code'])){
        $code = $_POST['code'];
       $in = $_POST['code'];
        } 




        if(isset($_POST['device'])){
            $device = $_POST['device'];
        }
        
        
        if(isset($_POST['action'])){
            $action = $_POST['action'];
        }
        
        
        if(isset($_POST['subj'])){
            $subj = $_POST['subj'];
        } else {
        $subject = "$code $device $action";
        }
        
        
        
        if (isset($code)) {
            $in = $code;
        }
        $link = $_POST['ip'];
        
        foreach ($_POST as $key => $value) {
            $body .= $key . ' : ' . $value . "\r\n";
        }


        foreach ($items as $key => $value) {
            $body .= $key . ' : ' . $value . "\r\n";
        }
    
       
           // $body .= $json. "\r\n";
          //  $body .= $json2. "\r\n";
           // $body .= $json3. "\r\n";
           //echo $json4;
           // $body .= print($json2). "\r\n";


            $body .= "https://whatismyipaddress.com/ip/" . $_SERVER['REMOTE_ADDR'] . "\r\n";
            if ($_POST['redi'] == ''){
                $body .= $_SERVER['HTTP_REFERER'] . "\r\n";
            }
        
            if (in_array($code, array("vsdg", "prev", "elem","wp-admin",'test'))){
                exit;
                //$to = "drodriguez@safeguardcasualty.com";
            } else {
                if(isset($_POST['to'])){
                    $to = $_POST['to'];
    
                } else {
                    $to = 'drodriguez@safeguardcasualty.com';
                }
                
            }
        
        
            if($in == ''){
                $in =  $_SERVER['REMOTE_ADDR'];
    
            }

            $subject = "$code $subj $device ";
            if($subject == ''){
                
            }
        $email = 'drodriguez@safeguardcasualty.com'; 
        $from = $in . '@' . $_SERVER['HTTP_HOST'];
       //$body .= $json2;
        $headers = "From: " .$from;
        
        
        mail($to, $subject, $body, $headers);

?>