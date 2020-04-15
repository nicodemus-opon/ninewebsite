<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Artist Growth Bundle</title>
<?php
include "../include/head.php";
?>


<body class="layout-column bg-dark" style="background-color: black;">
<?php
include "../include/navbar.php";
?>

<div id="main" class="layout-row flex">
    <div id="content" class="flex">
        <div>
            <div class="page-content page-container" id="page-content">
                <div class="padding sr">
                    <div class="page-hero" data-id="2"
                         data-source="">
                        <div class="media bg-media blur-this">
                            <div class="media-content blur-this"
                                 style="background-image:url('../assets/img/10-min.jpg')">
                            </div>
                        </div>

                        <div class="container">
                            <?php
                            include "../include/artist-bundle.php";
                            ?>
                        </div>
                    </div>
                </div>
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

<script
        src="https://www.paypal.com/sdk/js?client-id=ARZa6dzDbp7BVzyqHTpT7cB2uhSzHGW_R5dm6Fg3krx3l4MFc_wKQO3sRTwsz9qgDzOqT4eC2n1HttP3"> // Required. Replace SB_CLIENT_ID with your sandbox client ID.
</script>
<script>

    paypal.Buttons({
        createOrder: function (data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: 24.95
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
                        //console.log(data);
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
                        //console.log(data);
                        window.location.replace("/success");
                    }
                });

            });
        }
    }).render('#paypal-button-container');
</script>
</body>

</html>