<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Success</title>
<?php
session_start();

if (isset($_SESSION["email_s"])) {
    echo "";
} else {
    echo '<script>window.location.replace("/");</script>';
}

?>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
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
            <h5> An email containing download links & Licence has been sent to <span
                        class="text-primary"><?php echo($_SESSION["email_s"]); ?></span>
            </h5>
            <h5> or download here</h5>
            <h5>

                <a href="#" class="btn-link text-primary"> link no worky</a>
            </h5>
        </div>
        <div class="col-lg-6"
             style="background-image: url('../assets/img/payc.png');background-position: center;background-size:contain;background-repeat: no-repeat;min-height: 192px;  ">

        </div>

    </div>


</div>
<?php
require_once "../include/connect.php";
$sql = $sql = "insert into transactions values('" . $_SESSION["id_s"] . "','" . $_SESSION["email_s"] . "','" . $_SESSION["item_s"] . "','" . $_SESSION["amount_s"] . "','" . $_SESSION["item_s"] . "','" . $_SESSION["time_s"] . "')";
if (isset($_SESSION["email_s"])) {
    if ($con->query($sql) === true) {
        session_destroy();
    }
} else {
    echo '';
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