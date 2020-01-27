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
                         data-source="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/07/2c/59/072c59fe-549d-bd0e-f93d-3e4a1f673af5/mzaf_4035597378145374075.plus.aac.p.m4a">
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
                                <a href="#" class="text-highlight display-7"><i class="fab fa-youtube"></i></a>
                                <a href="#" class="text-highlight"> <i class="fab fa-twitter"></i></a>
                                <a href="#" class="text-highlight"><i class="fab fa-instagram"></i></a>
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
                                    <div class="heading pt-5 pb-3 d-flex">
                                        <div>
                                            <div class="text-muted sr-item">More...</div>
                                            <h5 class="text-highlight sr-item">Genres</h5>
                                        </div>
                                        <span class="flex"></span>
                                    </div>
                                    <div class="row list mb-4">


                                        <div class="col-6 col-md-3">
                                            <a href="/?g=afro" class="list-item list-hover r rounded">
                                                <div class="media"><a href="/?g=afro"
                                                                      class="ajax media-content"
                                                                      style="background-image:url('assets/img/afro.jpeg')"></a>

                                                </div>
                                                <div class="list-content text-center">
                                                    <div class="list-body"><a href="/?g=afro"
                                                                              class="list-title title ajax h-1x">Afro
                                                            beat </a></div>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="col-6 col-md-3">
                                            <a href="/?g=afro" class="list-item list-hover r rounded">
                                                <div class="media"><a href="/?g=dancehall"
                                                                      class="ajax media-content"
                                                                      style="background-image:url('assets/img/dancehall.jpeg')"></a>

                                                </div>
                                                <div class="list-content text-center">
                                                    <div class="list-body"><a href="/?g=dancehall"
                                                                              class="list-title title ajax h-1x">Dancehall </a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="col-6 col-md-3">
                                            <a href="/?g=afro" class="list-item list-hover r rounded">
                                                <div class="media"><a href="/?g=reggaeton"
                                                                      class="ajax media-content"
                                                                      style="background-image:url('assets/img/reggaeton.jpeg')"></a>

                                                </div>
                                                <div class="list-content text-center">
                                                    <div class="list-body"><a href="/?g=reggaeton"
                                                                              class="list-title title ajax h-1x">Reggaeton </a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                        <div class="col-6 col-md-3">
                                            <a href="/?g=afro" class="list-item list-hover r rounded">
                                                <div class="media"><a href="/?g=trap"
                                                                      class="ajax media-content"
                                                                      style="background-image:url('assets/img/trap.png')"></a>

                                                </div>
                                                <div class="list-content text-center">
                                                    <div class="list-body"><a href="/?g=trap"
                                                                              class="list-title title ajax h-1x">Trap </a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div style="min-width: 4rem"></div>
                        <div class="w-xl w-auto-sm no-shrink">
                            <div class="sticky">
                                <div class="list mb-5">
                                    <div class="list-item list-overlay r">
                                        <div class="media"><a href="#" class="ajax media-content r"

                                                              style="backgrounnd-image:url('../assets/img/bb.jpg');background-color: darkslateblue"></a>
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
                                <h6 class="text text-muted sr-item">Top tracks</h6>
                                <div class="row list-row">
                                    <div class="col-12" data-id="434202110" data-category="Hip-Hop" data-tag="USA"
                                         data-source="songs/s.wav">
                                        <div class="list-item r">
                                            <div class="media"><a href="item.detail.html#434202110"
                                                                  class="ajax media-content"
                                                                  style="background-image:url('assets/album-art/flute-u.png')"></a>
                                                <div class="media-action">
                                                    <button
                                                            class="btn btn-icon no-bg no-shadow hide-row"
                                                            data-toggle-class><i data-feather="heart"
                                                                                 class="active-fill"></i></button>
                                                    <button
                                                            class="btn btn-raised btn-icon btn-rounded bg--white btn-play"></button>
                                                    <button class="btn btn-icon no-bg no-shadow hide-row btn-more"
                                                            data-toggle="dropdown"><i
                                                                data-feather="more-horizontal"></i></button>
                                                    <div class="dropdown-menu dropdown-menu-right"></div>
                                                </div>
                                            </div>
                                            <div class="list-content">
                                                <div class="list-body"><a href="#"
                                                                          class="list-title title ajax h-1x">SICKO
                                                        MODE </a>
                                                    <a
                                                            href="#418888835"
                                                            class="list-subtitle d-block text-muted h-1x subtitle ajax">
                                                        <i
                                                                data-feather="activity"></i>100 BPM | #dancehall #afro
                                                    </a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php
include "include/footer.php";
?>
<?php
include "include/end.php";
?>

</body>

</html>