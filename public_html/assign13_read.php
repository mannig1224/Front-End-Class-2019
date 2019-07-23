<?php 
   $readFile = fopen("data/newfile.txt", "r") or die("Unable to open file!");
   echo '{ "students" :[';
   echo substr(trim(fread($readFile,filesize("data/newfile.txt"))), 0, -1);
   echo ']}';
   fclose($readFile);
?> 