<?php
session_start();
//print_r($_SESSION);

?>
<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Success</title>


<?php
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);*/
include "../include/head.php";
?>


<body class="layout-column bg-dark" style="background-color: black;">
<?php
include "../include/navbar.php";
?>


<div class="p-5"></div>

<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="#licenseinfo">
    <h1 class="display-4">Payment Successful</h1>
    <p class="lead"></p>
</div>

<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <h5> A message containing download links & Licence will be sent to <span
                    class="text-primary">Your Phone Number</span>
            </h5>
            <br>
            <br>
            <h5> Feel free to contact <a class="btn-link text-primary" href="mailto:hello@niconinebeats.com">hello@niconinebeats.com</a>
                incase of any enquiries<span
                    class="text-primary"></span>
            </h5>


            </h5>
        </div>
        <div class="col-lg-6"
             style="background-image: url('../assets/img/payc.png');background-position: center;background-size:contain;background-repeat: no-repeat;min-height: 192px;  ">

        </div>

    </div>


</div>


<?php
require_once "../include/connect.php";

$to = "cbsoftlabke@gmail.com";
$subject = "New Order";
$txt = "Some one ordered from site";
$headers = "From: hello@niconinebeats.com";

$_SESSION["email_s"]="mpesa details";
$_SESSION["id_s"]=time();

$sql = $sql = "insert into transactions values('" . $_SESSION["id_s"] . "','" . $_SESSION["email_s"] . "','" . $_SESSION["item_s"] . "','" . $_SESSION["amount_s"] . "','" . $_SESSION["item_s"] . "','" . $_SESSION["time_s"] . "')";


if (isset($_SESSION["email_s"])) {
    //mail($to,$subject,$txt,$headers);
    if ($con->query($sql) === true) {
        //echo "succccc";
        session_unset();
        session_destroy();
    }
} else {
    echo 'Invalid session';
}


?>


<?php
include "../include/footer.php";
?>
<?php
include "../include/end.php";
?>

</body>

</html>