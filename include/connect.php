<?php
$servername = "localhost";
$username = "niconine_niconine";
//$username = "nico";
$password = "Black11060!";
$dbname = "niconine_beatstore";
//$dbport = 3306;
$con = mysqli_connect($servername, $username, $password,$dbname);
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

?>