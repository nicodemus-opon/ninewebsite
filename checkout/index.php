<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Checkout</title>
<?php

session_start();
?>

<?php
include "../include/head.php";
?>


<body class="layout-column bg-dark" style="background-color: black;">
<?php
include "../include/navbar.php";
?>

<div class="p-5"></div>

<div class="row">
    <div class="container">
        <div class="col-12 text-center">
            <h1 class="display-4"> Check Out</h1>
        </div>
    </div>
</div>
<div class="p-3"></div>
<div class="row">
    <div class="container pt-3 justify-content-center">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="table-responsive">
                <table class="table table-image" style="overflow-x:scroll;">
                    <thead>
                    <tr class="text-white">
                        <th scope="col">#</th>
                        <th scope="col">Track</th>
                        <th scope="col">Licence</th>

                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="fill_cart">

                    </tbody>
                </table>

                <div class="d-flex justify-content-end">
                    <h5 class="text-white ">Total: $<span class="price text-success cart_full"></span></h5>
                </div>
            </div>
        </div>

    </div>

</div>
<div class="row">

    <div class="container pt-3">
        <div class="col-lg-6 col-sm-12">
            <div class="container py-3">
                <button type="button" class="btn btn-default text-light border-success btn-block"
                        onClick="payWithRave()"><img style="height: 20px;" class="img-fluid" src="../images/mpesa.png">
                    Pay with MPESA
                </button>
            </div>
        </div>
        <div class="col-lg-6 col-sm-12">
            <div class="container">
                <div id="paypal-button-container"></div>
            </div>
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
    $(".kill_cart").remove();
    $(document).ready(function () {

        display_cart();

    });
</script>

<script type="text/javascript" src="https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"></script>

<script
        src="https://www.paypal.com/sdk/js?client-id=ARZa6dzDbp7BVzyqHTpT7cB2uhSzHGW_R5dm6Fg3krx3l4MFc_wKQO3sRTwsz9qgDzOqT4eC2n1HttP3"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
</script>
<script>

    var amt = '';
    var kshamt=0;
    $.ajax({
        url: "../include/cart.php",
        method: "POST",
        data: {
            action: "get_total_amount"
        },
        success: function (data) {
            console.log(data);
            amt = data;
            kshamt=parseInt(data) * 100;
        }
    });
    $.ajax({
        url: "../include/cart.php",
        method: "POST",
        data: {
            action: "get_items"
        },
        success: function (data) {
            console.log("items");
            //console.log(data);
            itemsx = data;
            //window.location.replace("/success");
        }
    });
    paypal.Buttons({
        createOrder: function (data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: amt
                    }
                }]
            });
        },
        onApprove: function (data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function (details) {
                // This function shows a transaction success message to your buyer.
                let emailx = details.payer.email_address;
                let trans_id = details.id;
                let trans_amt = amt;
                var d = new Date();
                let trans_time = d.toLocaleString();
                let itemsx = "";
                $.ajax({
                    url: "../include/cart.php",
                    method: "POST",
                    data: {
                        action: "get_items"
                    },
                    success: function (data) {
                        console.log("items");
                        //console.log(data);
                        itemsx = data;
                        //window.location.replace("/success");
                    }
                });


                console.log(emailx);


                $.ajax({
                    url: "../include/send_conf.php",
                    method: "POST",
                    data: {
                        conf: "true",
                        email: emailx,
                        id: trans_id,
                        amt: trans_amt,
                        time: trans_time,
                        item: itemsx
                    },
                    success: function (data) {
                        //console.log(data);
                        window.location.replace("/success");
                    }
                });

            });
        }
    }).render('#paypal-button-container');
    //This function displays Smart Payment Buttons on your web page.

    const API_publicKey = "FLWPUBK-47dc168b2448656f86606fc25d135706-X";

    console.log("amtksh");
    console.log(kshamt);

    function payWithRave() {
        var x = getpaidSetup({
            PBFPubKey: API_publicKey,
            customer_email: "hello@niconinebeats.com",
            amount: kshamt,
            // An Mpesa mobile number is required when collecting Mpesa payment.
            currency: "KES",
            country: "KE",
            txref: "rave-123456",
            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function () {
            },
            callback: function (response) {
                var txref = response.data.txRef; // collect flwRef returned and pass to a                   server page to complete status check.
                console.log("This is the response returned after a charge", response);
                console.log(response.data.chargeResponseCode);
                console.log(response.data.status);
                if (
                    response.data.status=="success"
                ) {
                    console.log("succ");
                    window.location.replace("/success-mpesa");
                    // redirect to a success page
                } else {
                    console.log("no succ");
                    // redirect to a failure page.
                }

                x.close(); // use this to close the modal immediately after payment.
            }
        });
    }
</script>
</body>

</html>