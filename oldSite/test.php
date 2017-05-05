<html>
<head><?php
$servername = "mydb.db";
$username = "rmacias91";
$password = "Richard10!";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{
echo "Connected successfully";
}

?>
</head>

</html>
