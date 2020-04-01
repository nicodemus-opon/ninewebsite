<?php

session_start();

if(isset($_POST["action"]))
{
    if($_POST["action"] == "add")
    {
        $_SESSION["shopping_cart"]["ioi"]="hhh";
    }
}

?>