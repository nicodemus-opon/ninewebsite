<!DOCTYPE html>
<html lang="en-US" dir="ltr">

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
                        if (isset($_GET['q']) && !empty($_GET['q'])) {
                            $sqql = "SELECT * FROM beats where idx='" . $_GET['q'] . "';";

                        } else {
                            $sqql = "SELECT * FROM beats ORDER BY idx DESC LIMIT 1";
                        }

                        include "../include/connect.php";
                        echo $sqql;

                        $result = $con->query($sqql);
                        while ($row = $result->fetch_assoc()) { ?>
                        <title>Niconine Beats - Instrumental <?php echo $row['name']; ?> </title>


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
                                               style="background-image:url('../upload/<?php echo $row['image']; ?>');"> </a>

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

                        </div>


                        <?php
                        include "../include/licence.php";
                        ?>

                    </div>

                </div>

            </div>
        </div>
    </div>
</div>


<?php
//include "../include/contact.php";
?>


<?php
include "../include/footer.php";
?>
<?php
include "../include/end.php";
?>

</body>

</html>