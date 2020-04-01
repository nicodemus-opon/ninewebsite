
<div class="sticky">

    <div class="list mb-5 ">
        <div class="list-item list-overlay r">
            <div class="card gd-primary shadow hover-rotate hover">
                <div class="card-body">
<div class="text-highlight"><h3 class="text-highlight"> 20% off on all beats</h3></div>
                    <br>
                    <a class="text-light" href="#">Get Coupon Code</a>
                </div>
            </div>
        </div>
    </div>


<h6 class="text text-muted sr-item">Top tracks</h6>
    <div class="row list-row">
    <?php
    $sql="select * from beats LIMIT 3;";
    $result = $con->query($sql);
    while ($row = $result->fetch_assoc()) {?>


    <div class="col-12" data-id="<?php echo $row['idx']; ?>" data-category="Hip-Hop" data-tag="USA"
         data-source="upload/upload/<?php echo $row['audio']; ?>">
        <div class="list-item r">
            <div class="media"><a href="../track/?q=<?php echo $row['idx']; ?>"
                                  class="ajax media-content"
                                  style="background-image:url('upload/<?php echo $row['image']; ?>')"></a>
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
                        <i
                            data-feather="activity"></i><?php echo $row['bpm']; ?> BPM | <?php echo $row['tags']; ?>
                    </a></div>
            </div>
            <div class="list-action show-row">
                <a class="gumroad-buttonb btn btn-iconb btn-sm btn-light text-dark text-align-auto"
                   href="#" data-toggle="modal" data-target="#exampleModalCenter"> <i
                            data-feather="shopping-cart"
                            class="active-fill " style="f"></i></a>
            </div>
        </div>
    </div>
    <?php }?>
</div>