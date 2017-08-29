<?php

$handle = fopen("/var/www/html/michael/project/public/city.txt", "r") or die("Couldn't get handle");
$c=0;
if ($handle) {
    while (($line = fgets($handle)) !== false) {
			$c++;
        // process the line read.
        echo $line;
        if($c>=6) 
die("sdf");
    }

    fclose($handle);
} else {
	die("Sdfssss");
    // error opening the file.
} 

?> 
