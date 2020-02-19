<!DOCTYPE html>
<html lang="en-US" dir="ltr">

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
                        <div class="media bg-media">
                            <div class="media-content" style="background-image:url('../assets/img/b10.webp')">
                            </div>
                        </div>
                        <div class="pos-rlt text-white"><a href="#"
                                                           class="ajax text-primary h5 subtitle">Featured</a>
                            <?php
                            if (isset($_GET['ft']) && !empty($_GET['ft'])) {
                                $sqql = "SELECT * FROM beats where name='" . $_GET['ft'] . "';";

                            } else {
                                $sqql = "SELECT * FROM beats LIMIT 1";
                            }

                            ?>

                            <h1 class="display-3 font-weight-bold mb-0 text-white title">
                                <img src="assets/img/compact.png" style="height: 72px">
                                MAHMA</h1>
                            <div class="py-4 toolbar align-items-center">
                                <button class="btn btn-raised btn-rounded btn-icon gd-primary text-white btn-play"
                                        data-toggle-class></button>
                                <span class="text-fade">12,000</span>
                                <a class="gumroad-buttonb btn btn-icon text-white"
                                   href="#" target="_blank"><i
                                            data-feather="shopping-cart"
                                            class="active-fill"></i></a>

                            </div>
                            <div class="mb-2"><span class="text-fade">In: </span><a href="genres.html"
                                                                                    class="text-white ajax">Classical</a>,
                                <a href="genres.html" class="text-white ajax">World</a></div>
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
                        <div class="w-xl w-auto-sm no-shrink ">
                            <div class="sticky ">
                                <div class="list mb-5 ">
                                    <div class="list-item list-overlay r">
                                        <div class="media card"><a href="#" class="ajax media-content r"

                                                                   styhle="background-image:url('../assets/img/bb.jpg');background-color: darkslateblue;height:200px;"></a>
                                            <div class="media-action"></div>
                                        </div>
                                        <div class="list-content p-5 text-center">
                                            <div class="list-body"><a href="#"
                                                                      class="list-title title ajax h3 font-weight-bold">$15
                                                    Coupon on
                                                    next purchase
                                                </a>
                                                <button class="btn btn-sm btn-light text-dark btn-rounded mx-3"
                                                >I want this
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php
                                /*include "include/toptracks.php";*/
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
include "include/footer.php";
?>
<?php
include "include/end.php";
?>

</body>

</html>