<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Load an image from local webp file
// Images can be converted into webp
// using imagewebp() function or other
// online convertors
$ff="./upload/upload/me.png";
$im = imagecreatefrompng($ff);

imagejpeg($im, './upload/upload/example.jpeg', 0);


?>