<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Dancehall, Afro, Moombahton and Trap Instrumental Beats</title>


<style>
    .blur-this {
        /* Add the blur effect */
        filter: blur(8px);
        -webkit-filter: blur(8px);

        /* Full height */
        height: 100%;

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -10;
    }
</style>
<?php
include "include/head.php";
?>


<body class="layout-column bg-dark" style="background-color: black;">
<?php
include "include/navbar.php";
?>

<div id="main" class="layout-row flex">
    <div id="content" class="flex">
        <div>
            <div class="page-content page-container" id="page-content">
                <div class="padding sr">
                    <div class="page-hero" data-id="2"
                         data-source="">
                        <?php
                        if (isset($_GET['ft']) && !empty($_GET['ft'])) {
                            $sqql = "SELECT * FROM beats where name='" . $_GET['ft'] . "';";

                        } else {
                            $sqql = "SELECT * FROM beats ORDER BY idx DESC LIMIT 1";
                        }

                        include "include/connect.php";


                        $result = $con->query($sqql);
                        while ($row = $result->fetch_assoc()) { ?>
                        <div class="media bg-media blur-this">
                            <div class="media-content blur-this"
                                 style="background-image:url('../upload/<?php echo $row['image']; ?>')">
                            </div>
                        </div>
                        <div class="pos-rlt text-white"><a href="#"
                                                           class="ajax text-muted h5 subtitle">Featured</a>

                            <!--i was here-->
                            <div class="row">
                                <div class="col-lg-1 col-md-1 col-sm-2 pr-0" data-id="<?php echo $row['idx']; ?>"
                                     data-category="other"
                                     data-tag="USA"
                                     data-source="upload/upload/<?php echo $row['audio']; ?>">
                                    <div class="list-item r pr-0">
                                        <div class="media pr-0" style="height: 92px;width: 92px">
                                            <a href="../track/?q=<?php echo $row['idx']; ?>"
                                               class="ajaxh media-content"
                                               style="background-image:url('upload/<?php echo $row['image']; ?>');"> </a>

                                            <div class="media-action media-action-overlay">

                                                <button
                                                        class="btn btn-raised btn-icon btn-rounded bg--white btn-play"></button>

                                                <div class="dropdown-menu dropdown-menu-right"></div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div class="col-lg-10 col-md-10 col-sm-6 m-0 pr-0 pl-lg-5 pl-sm-3 pl-md-5 px-0i align-items-center text-left">
                                    <h1 class="display-3 font-weight-bold mb-0 d-lg-inline text-white title "
                                        style="text-transform: uppercase"><?php echo $row['name']; ?>  </h1>
                                </div>
                            </div>

                            <div class="py-4 toolbar align-items-center">


                                <button class="btn-m btn btn-iconb btn-sm btn-light text-dark text-align-auto"

                                        data-toggle="modal" data-target="#buy_modal"
                                        namex="<?php echo $row['name']; ?>"
                                        imgx="<?php echo $row['image']; ?>" id="<?php echo $row['idx']; ?>">$19.95 <i
                                            data-feather="shopping-cart"
                                            class="active-fill "></i></button>

                            </div>

                            <?php } ?>
                            <div class="py-2 px-0 pl-0 d-flex sr-item" id="filter-categoryh">

                                <div class="mx-0">
                                    <a href="../" class="btn btn-sm btn-white m-1">All genres </a>
                                    <a href="../?g=afro" class="btn btn-sm btn-white m-1">Afro Beat</a>
                                    <a href="../?g=dancehall" class="btn btn-sm btn-white m-1">Dancehall </a>
                                    <a href="../?g=trap" class="btn btn-sm btn-white m-1">Trap </a>
                                    <a href="../?g=reggaeton" class="btn btn-sm btn-white m-1">Reggaeton </a>
                                    <a href="../?g=moombahton" class="btn btn-sm btn-white m-1">Moombahton </a>
                                </div>
                            </div>
                        </div>
                        <div class="pos-rlt">


                        </div>
                    </div>
                    <div class="d-md-flex pos-rlt">
                        <div class="flex">

                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="overview">
                                    <div class="heading pt-0 pb-3 d-flex">

                                        <div>
                                            <h5 class="text-highlight sr-item">Tracks</h5>

                                        </div>
                                        <span class="flex"></span>
                                    </div>
                                    <div class="row list-row list-indexb">
                                        <?php
                                        include "include/tracks.php";
                                        ?>


                                    </div>


                                    <!--genres should be here-->


                                </div>

                            </div>
                        </div>

                        <div style="min-width: 4rem"></div>

                        <div class="w-xl w-auto-sm no-shrink pt-5">

                            <?php
                            include "include/toptracks.php";
                            ?>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</div>
<?php
include "include/licence.php";
?>

<?php
include "include/contact.php";
?>


<?php
include "include/footer.php";
?>
<?php
include "include/end.php";
?>

<!-- Modal -->
<div class="modal fade " id="buy_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="blur-thisb ">
            <div class="modal-content gd-dark wh-modal "
                 style="background-image: url('upload/upload/GOONS.png.webp');background-color: rgba(0,0,0,0.65);background-blend-mode:darken">
                <div class="modal-header">
                    <h5 class="modal-title text-white" id="titlename">MAHMA/ radio button </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4 pb-lg-0 pb-md-3 pb-sm-3">
                            <img src="upload/upload/GOONS.png.webp" class="r shadow dis-img img-fluid"
                                 style="height: 112px">
                        </div>
                        <div class="col-md-8">

                            <div class="form-group pt-3">
                                <label class="text-muted" for="form_need">Please Select licence *</label>
                                <select id="price_selected" name="need" class="form-control selectpicker"
                                        required="required"
                                        data-error="Please specify your need.">
                                    <option value="1">Mp3 ($19.95)</option>
                                    <option value="2">Wav & Mp3 ($49.95)</option>
                                    <option value="3">Mp3, Wav & Stems ($119.95)</option>


                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">

                    <button type="button" idx="" imgx="" namex="" class="btn btn-light btn-block text-dark btn-buy">Add
                        to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title text-dark" id="exampleModalLabel">
                   Your Cart
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <table class="table table-image">
                    <thead>
                    <tr>
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
                    <h5 class="text-dark">Total: $<span class="price text-success cart_full"></span></h5>
                </div>
            </div>
            <div class="modal-footer border-top-0 d-flex justify-content-between">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success">Checkout</button>
            </div>
        </div>
    </div>
</div>


<script>
    $(".launch_cart").click(function () {
        get_total_amount();
        get_total();
        view_cart();
    });


    $(".btn-m").click(function () {
        console.log($(this).attr("id"));
        var idx = $(this).attr("id");
        var imgx = "upload/" + $(this).attr("imgx");
        var namex = "Purchase " + $(this).attr("namex") + ' (Instrumental) ';
        var nmm = $(this).attr("namex");
        $(".dis-img").attr("src", imgx);
        $(".btn-buy").attr("idx", idx);
        $(".btn-buy").attr("namex", nmm);
        $(".btn-buy").attr("imgx", imgx);
        $("#titlename").html(namex);
        var style = "background-image: url('" + imgx + "');background-color: rgba(0,0,0,0.65);background-blend-mode:darken";
        $(".wh-modal").attr("style", style);
    });

    $(".btn-buy").click(function () {
        $('#buy_modal').modal('hide');
        var product_id = $(this).attr("idx");
        var pr = $('#price_selected').val();
        var product_name = $(this).attr("namex");
        var product_img = $(this).attr("imgx");


        var action = "add";

        $.ajax({
            url: "include/cart.php",
            method: "POST",
            data: {
                product_id: product_id,
                product_name: product_name, product_img: product_img,
                pr: pr,
                action: action
            },
            success: function (data) {
                //alert(data);
                get_total_amount();
                get_total();
                view_cart();
            }
        });


    });

    $(".delete_itemc").click(function () {
        console.log("ll");
        var ii = $(this).attr("idx");
        remove(ii);
    });


    function get_total() {
        $.ajax({
            url: "include/cart.php",
            method: "POST",
            data: {
                action: "get_total"
            },
            success: function (data) {
                get_total_amount();
                $(".cart_total").html(data);
            }
        });
    }

    function view_cart() {
        $.ajax({
            url: "include/cart.php",
            method: "POST",
            data: {
                action: "view"
            },
            success: function (data) {

                $("#fill_cart").html(data);
                feather.replace();
                $('#cartModal').modal('show');
            }
        });
    }

    function get_total_amount() {
        $.ajax({
            url: "include/cart.php",
            method: "POST",
            data: {
                action: "get_total_amount"
            },
            success: function (data) {
                console.log(data);
                $(".cart_full").html(data);
            }
        });
    }

    function remove(idx) {
        var row = "#row" + idx;
        $(row).remove();
        $.ajax({
            url: "include/cart.php",
            method: "POST",
            data: {
                action: "remove",
                product_id: idx

            },
            success: function (data) {
                console.log(data);
                get_total_amount();
                get_total();
            }
        });
    }

    function clear_cart() {
        $.ajax({
            url: "include/cart.php",
            method: "POST",
            data: {
                action: "clear_cart"
            },
            success: function (data) {
                console.log(data);
                get_total();
            }
        });
    }

    $(document).on("click", ".delete_item", function(event){
        console.log("ll");
        var ii = $(this).attr("idx");
        remove(ii);
    });

    $(document).ready(function () {
        feather.replace();


        get_total_amount();
        get_total();
    });

</script>


</body>

</html>