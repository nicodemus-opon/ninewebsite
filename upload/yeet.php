<?php
echo "gggg";
require_once "../include/connect.php";

$text="[";
$sqll = "select * from beats ORDER BY idx DESC";
$result = $con->query($sqll);


while ($row = $result->fetch_assoc()) {

    $text=$text.'
  {
    "type": "audio",
    "id": "'.$row['idx'].'",
    "title": "'.$row['name'].'",
    "subtitle": "'.$row['tags'].'",
    "thumb": "'.$row['image'].'",
    "uri": "'.$row['audio'].'",
    "previewurl": "",
    "img": ".'.$row['image'].'",
    "category": "Pop",
    "tag": "USA"
  },';
}
$text=rtrim($text, ",");
$text=$text."]";
$myfile = fopen("../assets/api/music.json", "w") or die("Unable to open file!");
fwrite($myfile, $text);
fclose($myfile);
echo "wrote to file";


?>
