<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();

if (isset($_POST["code"])) {

    if ($_POST["code"] == "20OFFBEATS" || $_POST["code"] == "20offbeats") {
        echo "conf";

    }else{
        echo "notconf";
    }
}