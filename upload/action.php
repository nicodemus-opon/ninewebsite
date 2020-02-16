<?php
session_start();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (!empty($_POST)) {
    echo "gggg";
    require_once "../include/connect.php";
    $nm = $_POST["title"];
    $idx = md5($nm);
    $gumroad = $_POST["gumroad"];
    $tags = $_POST["tags"];
    $bpm = $_POST["bpm"];


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


    $audio = $_FILES["audio"]["name"];
    $image = $_FILES["image"]["name"];


    $sql = "insert into beats values('" . $nm . "','" . $image . "','" . $bpm . "','" . $tags . "','" . $audio . "','" . $gumroad . "','" . $idx . "')";
    //echo $sql;
    //print $sql;
    if ($con->query($sql) === true) {
        echo "<br>";
        print '
                  <div class="alert alert-success" role="alert">
    <span class="alert-inner--text"><strong>Success: </strong> Published track ' . $nm . ' Successfully </span>
    <a href="../">click here to go back</a>
</div>
                  ';
        //header("Location:dashboard.php");
    } else {
        print '
  <div class="alert alert-warning" role="alert">
<span class="alert-inner--text"><strong>Error: </strong> Could not add  User</span>
</div>
  ';
    }
} else {
    echo "";
}

exit;
?>