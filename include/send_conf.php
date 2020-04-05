<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
session_start();

if (isset($_POST["conf"])) {
echo "conf iko";
    if ($_POST["conf"] == "true") {
        echo "conf true";

        $_SESSION["email_s"] = $_POST["email"];
        $_SESSION["id_s"] = $_POST["id"];
        $_SESSION["time_s"] = $_POST["time"];
        $_SESSION["amount_s"] = $_POST["amt"];
        print_r($_SESSION);
    }
}