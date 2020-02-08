<?php
session_start();
if (!empty($_POST)) {
    require_once "../include/connect.php";
    $nm = $_POST["title"];
    $idx = md5($nm);
    $gumroad = $_POST["gumroad"];
    $tags = $_POST["tags"];
    $bpm = $_POST["bpm"];

    $dis = $_POST["dis"];


    $sql = "insert into beats values('" . $auth . "','" . $nm . "','" . $ph . "','" . $em . "','" . $up . "','" . $dis . "','" . $ord . "')";
    //echo $sql;
    //print $sql;
    if ($con->query($sql) === true) {
        echo "<br>";
        print '
                  <div class="alert alert-success" role="alert">
    <span class="alert-inner--text"><strong>Success: </strong> Published Article ' . $nm . ' Successfully </span>
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
?>