<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Free Beats</title>


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
                        <?php
                        if (isset($_GET['ft']) && !empty($_GET['ft'])) {
                            $sqql = "SELECT * FROM beats where name='" . $_GET['ft'] . "';";

                        } else {
                            $sqql = "SELECT * FROM beats ORDER BY idx DESC LIMIT 1";
                        }

                        include "../include/connect.php";


                        $result = $con->query($sqql);
                        while ($row = $result->fetch_assoc()) { ?>
                        <div class="media bg-media blur-this">
                            <div class="media-content blur-this"
                                 style="background-image:url('../upload/<?php echo $row['image']; ?>')">
                            </div>
                        </div>
                        <div class="pos-rlt text-white">
                            <h4 href="#"
                               class="text-muted  subtitle">FREE BEATS </h4>
                            <h6 href="#"
                               class="text-muted  subtitle">(Downloads are only for preview)
                                please consider purchasing a lease before uploading  </h6>



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
                                    <div class="row list-row  list-indexb">
                                        <?php
                                        include "../include/free-tracks.php";
                                        ?>


                                    </div>
                                    <div class="row list-row pt-5 list-indexb">
                                        <div class="container">
                                            <a class="btn btn-block btn-primary" href="../"> More beats</a>
                                        </div>
                                    </div>

                                    <!--genres should be here-->


                                </div>

                            </div>
                        </div>

                        <div style="min-width: 4rem"></div>

                        <div class="w-xl w-auto-sm no-shrink pt-5">

                            <?php
                            include "../include/toptracks.php";
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
include "../include/licence.php";
?>

<?php
include "../include/contact.php";
?>


<?php
include "../include/footer.php";
?>

<?php
include "../include/end.php";
?>


</body>

</html>