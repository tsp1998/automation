<?php
	 header('Access-Control-Allow-Origin: *');
	 header('Access-Control-Allow-Methods: POST');
	 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
	 $txt = $_POST['data'];
	 $myfile = file_put_contents('links.txt', $txt.PHP_EOL , FILE_APPEND | LOCK_EX);
	 print_r($_POST);
?>
