<?php
/**
 * URL CSV archival tool
 */
$date = date('Y-m-d');
$link = $_SERVER['REQUEST_URI'];
echo $link;

$file = fopen("./csv/{$date}.csv", 'a');
fputcsv($file, [$date, $link]);
fclose($file);
exit();