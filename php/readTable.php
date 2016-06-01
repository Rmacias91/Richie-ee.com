<?php>
include ('config.php');

$sql = "SELECT * FROM myData";
$result = $conn->query($sql);
echo $result;

<?>
