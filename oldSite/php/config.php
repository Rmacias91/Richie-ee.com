<?php
$servername = "mydb.db";
$username = "rmacias91";
$password = "password";
$dbname = "myTable";

// Create connection
$conn = mysql_connect($servername, $username, $password);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$dbSelected= mysql_select_db($dbname,$conn);
if(!$dbSelected){
 die ('blog not selected : ' . mysql_error());  
}  
?>
