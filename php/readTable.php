<?php
include ('config.php');

$sql = "SELECT * FROM myData";
$result = mysql_query($sql);
if($result === FALSE) { 
    die(mysql_error()); // TODO: better error handling
}
while ($row = mysql_fetch_assoc($result)) {
    echo $row['Name'].' ';
    echo $row['Age'].' ';
    echo $row['Weight'].'';
    echo "\n";
}
mysql_close($conn);
?>
