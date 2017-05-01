<?php
$from = $_POST['from'];
$subj = $_POST['subj'];
$msg = $_POST['msg'];
$headers = "From: " .$from;
if(mail("sheeja.s18@gmail.com", $subj, $msg, $headers)){
  echo "true";
}
else{
  echo "false"
}
?>
