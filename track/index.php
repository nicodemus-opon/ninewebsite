<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Dancehall, Afro, Moombahton and Trap Instrumental Beats</title>

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
                        <div class="media bg-media">
                            <div class="media-content" style="background-image:url('../assets/img/wo.jpg')">
                            </div>
                        </div>
                        <div class="pos-rlt text-white"><a href="#"
                                                           class="ajax text-primary h5 subtitle">Featured</a>
                            <?php
                            if (isset($_GET['q']) && !empty($_GET['q'])) {
                                $sqql = "SELECT * FROM beats where idx='" . $_GET['q'] . "';";

                            } else {
                                $sqql = "SELECT * FROM beats ";
                            }

                            include "../include/connect.php";


                            $result = $con->query($sqql);
                            while ($row = $result->fetch_assoc()) { ?>


                                <h1 class="display-3 font-weight-bold mb-0 text-white title">
                                    <img src="../upload/<?php echo $row['image']; ?>" class="r shadow"
                                         style="height: 72px">
                                    <?php echo $row['name']; ?></h1>
                                <div class="py-4 toolbar align-items-center">
                                    <button class="btn btn-raised btn-rounded btn-icon gd-primary text-white btn-play"
                                            data-toggle-class
                                            data-source="upload/upload/<?php echo $row['audio']; ?>"></button>

                                    <a class="gumroad-buttonb btn btn-iconb btn-sm btn-light text-dark text-align-auto"
                                       href="<?php echo $row['gumroad']; ?>" target="_blank">$19.95 <i
                                                data-feather="shopping-cart"
                                                class="active-fill " stylbe="font-size: xx-small"></i></a>

                                </div>

                                <?php break;
                            } ?>

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