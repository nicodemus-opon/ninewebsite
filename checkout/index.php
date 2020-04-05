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


<script
        src="https://www.paypal.com/sdk/js?client-id=AWGRFNLCNAgOeVqJ2eNEc69zax8sYwc2OsjdF1O5O2faHhbCJTsB1wMRp4S9_8w-RxlDli-5l_7-MJ0b"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
</script>
<script>
    var amt = '';
    $.ajax({
        url: "../include/cart.php",
        method: "POST",
        data: {
            action: "get_total_amount"
        },
        success: function (data) {
            console.log(data);
            amt = data;
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
                let trans_id=details.id;
                let trans_amt=amt;
                var d = new Date();
                let trans_time=d.toLocaleString();
                let itemsx="";
                $.ajax({
                    url: "../include/cart.php",
                    method: "POST",
                    data: {
                        action: "get_items"
                    },
                    success: function (data) {
                        console.log("items");
                        console.log(data);
                        itemsx=data;
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
                        id:trans_id,
                        amt:trans_amt,
                        time:trans_time,
                        item:itemsx
                    },
                    success: function (data) {
                        console.log(data);
                        window.location.replace("/success");
                    }
                });

            });
        }
    }).render('#paypal-button-container');
    //This function displays Smart Payment Buttons on your web page.
</script>

</body>

</html>