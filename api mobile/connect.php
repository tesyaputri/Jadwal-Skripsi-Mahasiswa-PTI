<?php
$servername = "localhost"; 
$username = "id5345808_tesyaputri";
$password = "mahkotadewi"; 
$dbname = "id5345808_tesya";
 
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname); 
// Check connection
if (!$conn) { 
    die("Connection failed: " . mysqli_connect_error());
}else{
	//echo "Koneksi berhasil";
} 
?> 