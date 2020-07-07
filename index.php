<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>
    <?php
    $limit = 10;
    session_start();
    if (isset($_GET['g']) && !empty($_GET['g'])) {
        echo "Niconine Beats - " . $_GET['g'] . " Instrumental Beats";

    } else {
        echo("Niconine Beats - Buy Dancehall Beats, Afrobeats, Afro Pop, Afro Trap, Gengetone, Moombahton, Riddims,Instrumental Beats for Sale ");
    }
    ?>
</title>

<script type="application/ld+json">
    {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Niconine",
        "url": "https://www.niconinebeats.com/",
        "image": "https://www.niconinebeats.com/images/profile.png",
        "sameAs": [
            "https://www.facebook.com/byniconine-109054163959147/",
            "https://www.twitter.com/byniconine/",
            "https://www.instagram.com/by.niconine/",
            "https://www.youtube.com/niconine"
        ],
        "jobTitle": "Music Producer"
    }
</script>
<script type="application/ld+json">
    {
        "@context": "https://schema.org/",
        "@type": "WebSite",
        "name": "Niconine Beats",
        "url": "https://www.niconinebeats.com/",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.niconinebeats.com/?ft={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    }
</script>
<link rel="canonical" href="https://niconinebeats.com/"/>

<?php
include "include/head.php";
?>
<style>
    .btn:focus, .btn:active {
        outline: none !important;
        box-shadow: none;
    }
</style>

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
                        if ((isset($_GET['ft']) && !empty($_GET['ft'])) or ($_SESSION["ft"] != null)) {
                            if (isset($_GET['ft']) && !empty($_GET['ft'])) {
                                $_SESSION["ft"] = $_GET['ft'];
                                //echo "session";
                                //echo $_SESSION["ft"];
                            }
                            //echo "is got";
                            //echo $_SESSION["ft"];
                            //echo empty($_SESSION["ft"]);
                            $sqql = "SELECT * FROM beats where name='" . $_SESSION["ft"] . "';";

                        } else {
                            //echo "else";
                            //echo $_SESSION["ft"];
                            //echo empty($_SESSION["ft"]);
                            if (isset($_GET['g']) && !empty($_GET['g'])) {
                                $sqql = "SELECT * FROM beats where `tags` LIKE '%" . $_GET['g'] . "%' ORDER BY idx DESC LIMIT 1";
                            } else {
                                $sqql = "SELECT * FROM beats ORDER BY idx DESC LIMIT 1";
                            }
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
                                     data-source="../upload/upload/<?php echo $row['audio']; ?>">
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


                                <button class="btn-m btn btn-iconb btn-smn btn-primary  text-light text-align-auto"

                                        data-toggle="modal" data-target="#buy_modal"
                                        namex="<?php echo $row['name']; ?>"
                                        imgx="<?php echo $row['image']; ?>" id="<?php echo $row['idx']; ?>"
                                        style="vertical-align: middle;" ripple="ripple"><i class="icon-add-cart align-middle"
                                                                           style="font-size: 22px;font-weight: 500"></i>
                                    <span class="align-middle ml-1 " >$19.95</span></button>
                                <button tabindex="0"
                                   class=" btn btn-iconb btn-clean btn-smn btn-lightn text-light share-this  text-align-auto"


                                   namex="<?php echo $row['name']; ?>"
                                   imgx="<?php echo $row['image']; ?>" id="<?php echo $row['idx']; ?>"
                                   data-container="body" data-toggle="popover" data-placement="top"
                                   data-content="Link copied to clipboard!"
                                   ripple="ripple">
                                    <i
                                            data-feather="share-2"
                                            class="active-fill "></i> share</button>

                            </div>

                            <?php } ?>
                            <div class="py-2 px-0 pl-0 d-flex sr-item" id="filter-categoryh">

                                <div class="mx-0">
                                    <a href="../" class="btn btn-sm btn-white m-1">All genres </a>
                                    <a href="../?g=afro" class="btn btn-sm btn-white m-1">Afro Beat</a>
                                    <a href="../?g=dancehall" class="btn btn-sm btn-white m-1">Dancehall </a>
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
                                    <div class="row list-row pt-5 list-indexb justify-content-center">
                                        <div class="container ">
                                            <a class="btn btn-block btn-primary p-2 text-center" href="../tracks" ripple="ripple">
                                                Browse All beats</a>
                                        </div>
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

</body>

</html>