<?php
session_start();
//print_r($_SESSION);
$trimo = str_replace("+", " ", $_SESSION["item_s"]);
$trimoo = str_replace("-", " ", $trimo);
$trimot = ltrim($trimoo, " ");

if (isset($_SESSION["email_s"])) {
    echo "";
} else {
    echo "Unauthorized";
    echo '<script>window.location.replace("/");</script>';

}

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
    <div class="row pb-3">
        <div class="col-lg-6">
            <h5 class="text-muted"> An email containing download links & Licence has been sent to: <br> <span
                        class="text-primary"><?php echo($_SESSION["email_s"]);
                    ?></span>
            </h5>
            <div class="pt-2"></div>
            <div class="card">
                <div class="card-body text-leftb">

                    <table class="table text-white group table-striped">
                        <tbody>
                        <?php foreach ($_SESSION["shopping_cart"] as $key): ?>
                            <tr>
                                <td>
                                    <img src="../upload/<?php echo $key["img"]; ?>"
                                         class="img-fluidb img-thumbnailb r"
                                         style="height: 48px" alt="Preview">
                                    <span class="ml-1"
                                          style="text-transform: capitalize"> <?php echo $key["name"]; ?><span
                                                class="m-1b"> </span><?php echo $key["lease"]; ?></span>
                                </td>
                                <td class="text-right"><a target="_blank"
                                                          href="https://www.niconinebeats.com/d/?prod=<?php echo $key["idx"]; ?>&auth=<?php echo $key["leaseid"]; ?>"
                                                          class="btn btn-link text-white"><!--i data-feather="download"
                                                                    class="icon-downloadb active-fill align-middle"
                                                                    style="font-size: 22px;font-weight: 500"></i-->
                                        Download</a></td>
                            </tr>

                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
            <br>
            <br>
            <h5> Feel free to contact <a class="btn-link text-primary" href="mailto:hello@niconinebeats.com">hello@niconinebeats.com</a>
                incase of any enquiries<span
                        class="text-primary"></span>
            </h5>


            </h5>
        </div>
        <div class="col-lg-6 d-none d-lg-block"
             style="background-image: url('../assets/img/payc.png');background-position: center;background-size:contain;background-repeat: no-repeat;min-height: 192px;  ">

        </div>

    </div>


</div>


<?php
include "../include/footer.php";
?>
<?php
include "../include/end.php";
?>

<script>
    // Send transaction data with a pageview if available
    // when the page loads. Otherwise, use an event when the transaction
    // data becomes available.
    dataLayer.push({
        'event': 'transaction',
        'ecommerce': {
            'purchase': {
                'actionField': {
                    'id': '<?php echo($_SESSION["id_s"]); ?>',
                    'affiliation': 'Niconine Beats',
                    'revenue': '<?php echo($_SESSION["amount_s"]); ?>'
                },
                'products': [
                    <?php foreach ($_SESSION["shopping_cart"] as $key): ?>
                    {
                        'name': '<?php echo $key["name"]; ?>',
                        'id': '<?php echo $key["idx"]; ?>',
                        'price': '<?php echo $key["price"]; ?>',
                        'category': '<?php echo $key["lease"]; ?>',
                        'quantity': 1

                    },
                    <?php endforeach; ?>


                ]

            }
        }
    });
</script>

<script>
    <?php foreach ($_SESSION["shopping_cart"] as $key): ?>
    $.ajax({
        url: "../include/delivery.php",
        method: "POST",
        data: {
            product_image: 'https://www.niconinebeats.com/<?php echo substr($key["img"], 3); ?>',
            product_link: 'https://www.niconinebeats.com/d/?prod=<?php echo $key["idx"]; ?>&auth=<?php echo $key["leaseid"]; ?>',
            email: '<?php echo $_SESSION["email_s"] ?>',
            licence_link: 'https://www.niconinebeats.com/l/?prod=<?php echo $key["idx"]; ?>&auth=<?php echo $key["leaseid"]; ?>'

        },
        success: function (data) {
            console.log(data);

        }
    });

    <?php endforeach; ?>
</script>


<?php
require_once "../include/connect.php";

$to = "cbsoftlabke@gmail.com";
$subject = "New Order";
$txt = "Some one ordered from site";
$headers = "From: hello@niconinebeats.com";


$sql = $sql = "insert into transactions values('" . $_SESSION["id_s"] . "','" . $_SESSION["email_s"] . "','" . $_SESSION["item_s"] . "','" . $_SESSION["amount_s"] . "','" . $_SESSION["item_s"] . "','" . $_SESSION["time_s"] . "')";
if (isset($_SESSION["email_s"])) {
    //mail($to, $subject, $txt, $headers);
    if ($con->query($sql) === true) {
        echo "";
        session_unset();
        session_destroy();
    }
} else {
    echo 'Invalid session';
}


?>

</body>

</html>