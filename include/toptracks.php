<div class="sticky">

    <div class="list mb-5 ">
        <div class="list-item list-overlay r">
            <div class="card gd-dark shadow hover-rotate hover border-primary border">
                <div class="card-body">
                    <div class="text-highlightv"><h3 class="text-highlight">🎉 Coupon Deal</h3>
                        <span class="card-text text-muted">
                            Use promo code:
                            <br><h4><b class=""> 20OFFBEATS</b></h4>

                            To get 20% off all beats at checkout

                        </span>
                    </div>
                    <br>
                    <!--a class="btn-light btn text-primary btn-block" href="#licenseinfo">VIEW LICENCES</a-->
                </div>
            </div>
        </div>
    </div>


    <h6 class="text text-muted sr-item">Top tracks</h6>
    <div class="row list-row">
        <?php
        $sql = "select * from beats LIMIT 3;";
        $result = $con->query($sql);
        while ($row = $result->fetch_assoc()) { ?>


            <div class="col-12" data-id="<?php echo $row['idx']; ?>" data-category="Hip-Hop" data-tag="USA"
                 data-source="../upload/upload/<?php echo $row['audio']; ?>">
                <div class="list-item r">
                    <div class="media"><a href="../track/?q=<?php echo $row['idx']; ?>"
                                          class="ajax media-content lazyload"
                                          data-bg="../upload/<?php echo $row['image']; ?>"
                                          styble="background-image:url('../upload/<?php echo $row['image']; ?>')"></a>
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
                        <div class="list-body"><a href="../track/?q=<?php echo $row['idx']; ?>"
                                                  class="list-title title ajax h-1x"><?php echo $row['name']; ?> </a>
                            <a
                                    href="../track/?q=<?php echo $row['idx']; ?>"
                                    class="list-subtitle d-block text-muted h-1x subtitle ajax">
                                <?php echo $row['bpm']; ?> BPM

                            </a></div>
                    </div>
                    <div class="list-action show-row">
                        <button class="gumroad-buttonb btn btn-iconb btn-sm btn-primary text-light text-align-auto btn-m"
                                data-toggle="modal" data-target="#buy_modal" namex="<?php echo $row['name']; ?>"
                                imgx="<?php echo $row['image']; ?>" id="<?php echo $row['idx']; ?>"><span
                                    class="d-none d-lg-inline d-sm-block"> </span> <i class="icon-add-cart align-middle" style="font-size: 22px;font-weight: 500"></i> <span class="ml-1">ADD</span></button>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
