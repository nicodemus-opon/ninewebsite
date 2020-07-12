<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>
    <?php

    $limit = 100;
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
include "../include/head.php";
?>
<style>
    .btn:focus, .btn:active {
        outline: none !important;
        box-shadow: none;
    }
</style>

<body class="layout-column bg-dark" style="background-color: black;">
<?php
include "../include/navbar.php";
?>

<div id="main" class="layout-row flex">

    <div id="content" class="flex">
        <div>
            <div class="page-content page-container" id="page-content">

                <div class="padding pt-0 sr">
                    <div class="page-hero" data-id="2"
                         data-source="">


                        <?php
                        if (isset($_GET['ft']) && !empty($_GET['ft'])) {
                            $sqql = "SELECT * FROM beats where name='" . $_GET['ft'] . "';";

                        } else {
                            if (isset($_GET['g']) && !empty($_GET['g'])) {
                                $sqql = "SELECT * FROM beats where `tags` LIKE '%" . $_GET['g'] . "%' ORDER BY idx DESC LIMIT 1";
                            } else {
                                $sqql = "SELECT * FROM beats ORDER BY idx DESC LIMIT 1";
                            }
                        }

                        include "../include/connect.php";


                        $result = $con->query($sqql);
                        while ($row = $result->fetch_assoc()) { ?>
                        <div class="media bg-media blur-this">
                            <div class="media-content blur-this"
                                 style="background-image:url('../upload/<?php echo $row['image']; ?>')">
                            </div>
                        </div>
                        <div class="pos-rlt text-white ">
                            <div class="pricing-header pt-0 px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
                                 ibd="licenseinfo">
                                <h1 class="display-4 text-muted" style="font-weight: 600;">All Tracks</h1>
                                <p class="lead"></p>
                            </div>


                            <div class=" row justify-content-center xoxo">
                                <div class="col-12 col-md-10 col-lg-8">
                                    <form class="card card-sm  mb-0 parento"
                                          style="background-color: #ffffff !important;">
                                        <div class="card-body p-1 row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <!--i class="align-middle text-dark h4b ml-2" data-feather="search"></i-->
                                            </div>
                                            <!--end of col-->
                                            <div class="col">
                                                <input class="form-control search-tag form-control-lgb form-control-borderless text-dark"
                                                       name="search-tag" type="search"
                                                       placeholder="Search tracks or genres" autocomplete="off">

                                            </div>
                                            <!--end of col-->
                                            <div class="col-auto">
                                                <button class="btn btn btn-primary px-2 text-light p-1 align-middle search-b"
                                                        type="submit"
                                                        ripple="ripple" style="height: 48px;"><!--i class="align-middle "
                                                                                                data-feather="search"></i-->
                                                    <span class="text-light"> Search</span>
                                                </button>
                                            </div>
                                            <!--end of col-->
                                        </div>
                                    </form>
                                    <?php } ?>
                                    <div id="searchlist" class="card  pt-0n mt-2 sonento "
                                         style="background-color: #ffffff !important;z-index: 10;
                                         position: absolute;width:657px;box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);height: auto">
                                        <ul class="list-group listo bg-light text-dark  "
                                            style="background-color: #ffffff !important;display: none;">
                                            <?php

                                            $resultx = $con->query("select * from beats;");
                                            while ($rowc = $resultx->fetch_assoc()) { ?>
                                                <a href="../tracks/?search-tag=<?php echo $rowc['name']; ?>" class="list-group-item text-dark lolo" style=" text-overflow: ellipsis;">
                                                    <!--i class="icon-beats align-middle" style="font-size: 32px; ">  </i-->
                                                    <img src="/upload/upload/track-placeholder.svg"
                                                         data-src="/upload/<?php echo $rowc['image']; ?>"
                                                         class="r lazyload"
                                                         style="height: 40px">
                                                    <span class="ml-1" style="font-weight: 500;"><?php echo $rowc['name']; ?> -</span>
                                                    <span class="ml-1 text-mutedv " style="text-transform: capitalize; text-overflow: ellipsis;"><?php echo $rowc['tags']; ?></span>
                                                </a>

                                            <?php } ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <!--div class="py-2 px-0 pl-0 d-flex sr-item" id="filter-categoryh">

                                <div class="mx-0">
                                    <a href="../" class="btn btn-sm btn-white m-1">All genres </a>
                                    <a href="../?g=afro" class="btn btn-sm btn-white m-1">Afro Beat</a>
                                    <a href="../?g=dancehall" class="btn btn-sm btn-white m-1">Dancehall </a>
                                    <a href="../?g=reggaeton" class="btn btn-sm btn-white m-1">Reggaeton </a>
                                    <a href="../?g=moombahton" class="btn btn-sm btn-white m-1">Moombahton </a>
                                </div>
                            </div-->

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
                                            <?php
                                            include "options.php";
                                            ?>
                                        </div>
                                        <span class="flex"></span>
                                    </div>
                                    <div id="results" class="row list-row list-indexb">
                                        <?php
                                        include "../include/tracks.php";
                                        ?>


                                    </div>


                                    <!--genres should be here-->


                                </div>

                            </div>
                        </div>

                        <div style="min-width: 4rem"></div>


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