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
                            <div class="media-content" style="background-image:url('../assets/img/b10.jpg')">
                            </div>
                        </div>
                        <div class="pos-rlt">
                            <span class="hide title">Shallow</span> <span class="hide subtitle">Lady Gaga & Bradley
                                    Cooper</span>
                            <div class="py-4 toolbar align-items-center">
                                    <span class="text-muted">10 tracks, 5
                                        playlist</span>
                                <button class="btn btn-sm btn-outline-light btn-rounded mx-3"
                                        data-toggle-class><span class="d-inline">Follow</span> <span
                                            class="d-none">Following</span></button>
                            </div>
                            <div class="mb-2"><span class="text-muted">Social: </span>
                                <a href="youtube.com/niconine" class="text-highlight display-7"><i
                                            class="fab fa-youtube"></i></a>
                                <a href="twitter.com/byniconine" class="text-highlight"> <i class="fab fa-twitter"></i></a>
                                <a href="instagram.com/by.niconine" class="text-highlight"><i
                                            class="fab fa-instagram"></i></a>
                            </div>
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

                                                                   style="background-image:url('../assets/img/bb.jpg');background-color: darkslateblue;height:200px;"></a>
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