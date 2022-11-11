<?php
	try {
	 $filePath =  ($_POST and $_POST['filePath']) ? $_POST['filePath'] : $argv[1];
	 $content =  ($_POST and $_POST['content']) ? $_POST['content'] : $argv[2];
	 $filePointer = fopen($filePath, "w") or die("Unable to open file!");
	 fwrite($filePointer, $content);
	 echo "File Written";
	 fclose($filePointer);
	} catch(Exception e) {
	 echo "Something went wrong";
	}
?> 
