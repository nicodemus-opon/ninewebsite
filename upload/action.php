<?php
session_start();

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
ini_set('upload_max_filesize', '100M');
ini_set('max_file_uploads', '100M');
ini_set('post_max_size', '100M');
error_reporting(E_ALL);

echo ini_get('post_max_size');


var_dump($_POST);
//if (!empty($_POST)) {
echo "gggg";
require_once "../include/connect.php";
$nm = $_POST["title"];
$idx = time() . substr(md5($nm), 0, 5);
$gumroad = $_POST["gumroad"];
$tags = $_POST["tags"];
$bpm = $_POST["bpm"];
$mp3link = $_POST["mp3link"];
$wavlink = $_POST["wavlink"];
$ziplink = $_POST["ziplink"];

if ($_FILES["audio"]["error"] > 0)
    echo "Return Code: " . $_FILES["audio"]["error"] . "<br>";
else {
    if (file_exists("upload/" . $_FILES["audio"]["name"]))
        echo $_FILES["audio"]["name"] . " already exists. ";
    else {
        echo $_FILES["audio"]["name"] . " has been uploaded. <br>";
        move_uploaded_file($_FILES["audio"]["tmp_name"],
            "upload/" . $_FILES["audio"]["name"]);
        echo "St= " . "upload/" . $_FILES["audio"]["name"];
    }
}


if ($_FILES["image"]["error"] > 0)
    echo "Return Code: " . $_FILES["image"]["error"] . "<br>";
else {
    if (file_exists("upload/" . $_FILES["image"]["name"]))
        echo $_FILES["image"]["name"] . " already exists. ";
    else {
        echo $_FILES["image"]["name"] . " has been uploaded. <br>";
        move_uploaded_file($_FILES["image"]["tmp_name"],
            "upload/" . $_FILES["image"]["name"]);
        echo "St= " . "upload/" . $_FILES["image"]["name"];
    }
}

// Initialise your autoloader (this example is using Composer)
require '../vendor/autoload.php';

use WebPConvert\WebPConvert;

$source = 'upload' . '/' . $_FILES["image"]["name"];;
$destination = $source . '.webp';
$options = [];
try {
    WebPConvert::convert($source, $destination, $options);
} catch (Exception $e) {
    echo "webp error";
    echo $e;
}


$audio = $_FILES["audio"]["name"];
$image = $destination;


$sql = "insert into beats values('" . $nm . "','" . $image . "','" . $bpm . "','" . $tags . "','" . $audio . "','" . $gumroad . "','" . $idx . "','" . $mp3link . "','" . $wavlink . "','" . $ziplink . "')";
//echo $sql;
//print $sql;
if ($con->query($sql) === true) {
    echo "<br>";
    print '
                  <div class="alert alert-success" role="alert">
    <span class="alert-inner--text"><strong>Success: </strong> Published track ' . $nm . ' Successfully </span>
    <a href="../">click here to go back</a>
    <a href="../upload">click here upload again</a>
</div>
                  ';
    //header("Location:dashboard.php");
} else {
    echo mysqli_error($con);

}

/*
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

/*
} else {
    echo "post issa emptia";
}*/

exit;
?>