<?php

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['_id'])) {





    
$code = $_POST['code'];
if($code){
    $in = $code;
}

if(isset($_POST['subj'])){
$subject = $_POST['subj'];

} else {
    $subject = $code;
}
foreach ($_POST as $key => $value) 
$body .= $key . ' : ' . $value . "\r\n";



    if ( file_exists( '/var/www/key') ) {
        $to =  file_get_contents('/var/www/key');
        } else {
            echo 'TO?';
            exit;
        }


        if($in == ''){
            $in = 'noreply';
        }
if($code == 'test'){
    exit;
}
    $from = $in . '@' . $_SERVER['HTTP_HOST'];
    $headers  = "From: ".$from ."\n";
    $headers .= "X-Sender: ". $_POST['_id'] .$from ."\n";
    $headers .= "Return-Path:". $to ."\n"; // Return path for errors
    $headers .= "MIME-Version: 1.0\r\n";
 // $headers .= "Content-Type: text/html; charset=iso-8859-1\n";
    
    
    
    
    mail($to, $subject, $body, $headers);
exit;
}





$user_agent = strtolower($_SERVER['HTTP_USER_AGENT']);

$ip = $_SERVER['REMOTE_ADDR'];

$current = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

$s = strpos($current, '?') !== FALSE ? strtok($current, '?') : $current;
    
$tokens = explode(".", $s);

$server = $tokens[0];

if($server == 'www'){
    $server = $tokens[1];
}




$dir = '/var/www/';
$data = 'data.json';
$main = 'main.js';
$style = 'style.css';
$content = 'content.js';
$index = 'index.php';
/*
echo $_SERVER['DOCUMENT_ROOT']. '<br>';
echo $user_agent . '<br>'; 
echo $ip . '<br>';
echo $current . '<br>';
echo $s . '<br>';
echo $server . '<br>';
echo $dir . '<br>';
echo $data . '<br>';
echo $main . '<br>';
echo $style . '<br>';
echo $content . '<br>';
echo $index . '<br>';
*/
$root = $_SERVER['DOCUMENT_ROOT']; 

if (!file_exists($root .'/script/')) {
    mkdir($root .'/script/', 0777, true);
    $file = fopen($root .'/script/'. $index, 'w') or die("Unable to open $index!");
    fclose($file);
}
if (!file_exists($root .'/functions/')) {
    mkdir($root .'/functions/', 0777, true);
    $file = fopen($root .'/functions/'. $index, 'w') or die("Unable to open $index!");
    fclose($file);
}
if (!file_exists($root .'/css/')) {
    mkdir($root .'/css/', 0777, true);
    $file = fopen($root .'/css/'. $index, 'w') or die("Unable to open $index!");
    fclose($file);
}
if (!file_exists($root .'/data/')) {
    mkdir($root .'/data/', 0777, true);
    $file = fopen($root .'/data/'. $index, 'w') or die("Unable to open $index!");
    fclose($file);
}




/*

$json_data = json_encode($posts);
file_put_contents($root .'/data/'. $data, $json_data);
//echo $root .'/script/'. $content;
*/
if(!is_file($root .'/script/'. $content)){

    $file = fopen($root .'/script/'. $content, 'w') or die("Unable to open $content!");
    fclose($file);
}


if(!is_file($root .'css/'. $style)){

    $file = fopen($root .'css/'. $style, 'w');
    fclose($file);
}


if(!is_file($root .'css/bootstrap.css')){

    $data = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/bootstrap.css');
    $myfile = fopen($root .'css/bootstrap.css', "w");
    fwrite($myfile, $data);
    fclose($myfile);
    
    }

    if(!is_file($root .'/script/ajax.js')){

        $dat = file_get_contents('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
        $myfile = fopen($root .'/script/ajax.js', "w");
        fwrite($myfile, $dat);
        fclose($myfile);
        
        }

if(!is_file($root .'/script/'. $main)){

    $dat = file_get_contents('https://raw.githubusercontent.com/drod247/main.js/main/main.js');
    $myfile = fopen($root .'/script/'. $main, "w") or die("Unable to open $main!");
    fwrite($myfile, $dat);
    fclose($myfile);
    
    }
    
    


   if( basename(__FILE__, '.php') == 'index'){
 echo   '<!DOCTYPE html>';
 echo   '<html lang="en">';
 echo   '<head>';
 echo   '<meta charset="UTF-8">';
 echo   '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
 echo   '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
 echo '<script src="/script/ajax.js"></script>';
 echo "<script type='text/javascript' src='/script/${main}'></script>";
 echo   '<title>Document</title>';
 echo   '</head>';
 echo   '<body>';
        
 echo   '</body>';
 echo   '</html>';
   } else {
    //echo '<script src="/script/ajax.js"></script>';
    //echo "<script type='text/javascript' src='/script/${main}'></script>";
      
echo '<script>import("/script/ajax.js").then((module) => { $.getScript( "../script/main.js", function() {console.log("loaded")})});</script>';
}
