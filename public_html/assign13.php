<?php 
   $str_json = file_get_contents('php://input').",\r\n";
   $writeFile = fopen("data/newfile.txt", "a") or die("Unable to open file!");
   fwrite($writeFile, $str_json);
   fclose($writeFile);
?>
