<?php
include ('config.php');

$sql = "SELECT * FROM myData WHERE counter=1";
$result = mysql_query($sql);
$row = mysql_fetch_array($result);
echo $row['Name'];
print_r($result);
mysql_close($conn);
?>
