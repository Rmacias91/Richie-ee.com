<?php
include ('config.php');

$sql = "SELECT * FROM myData";
$result = mysql_query($sql);
echo $result;

?>
