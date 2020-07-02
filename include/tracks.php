<?php

include "connect.php";

//$sql = "select * from beats ORDER BY idx DESC";

if (isset($_GET['g']) && !empty($_GET['g'])) {
    $sql = "SELECT * FROM beats where `tags` LIKE '%".$_GET['g']."%' ORDER BY idx DESC";
} else {
    $sql = "SELECT * FROM beats ORDER BY idx DESC";
}

$result = $con->query($sql);
//$mm=array_reverse();

while ($row = $result->fetch_assoc()) { ?>

    <div class="col-12" data-id="<?php echo $row['idx']; ?>" data-category="other" data-tag="USA"
         data-source="../upload/upload/<?php echo $row['audio']; ?>">
        <div class="list-item r">
            <div class="media">
                <a href="../track/?q=<?php echo $row['idx']; ?>"
                   class="ajaxh media-content lazyload" data-bg="../upload/<?php echo $row['image']; ?>"
                   style="background-image:url('../upload/upload/track-placeholder.svg')"></a>
                <div class="media-action media-action-overlay">
                    <button
                            class="btn btn-icon no-bg no-shadow hide-row"
                            data-toggle-class><i data-feather="heart"
                                                 class="active-fill"></i></button>
                    <button
                            class="btn btn-raised btn-icon btn-rounded bg--white btn-play"></button>
                    <button
                            class="btn btn-icon no-bg no-shadow hide-row btn-more"
                            data-toggle="dropdown"><i
                                data-feather="more-horizontal"></i></button>
                    <div class="dropdown-menu dropdown-menu-right"></div>
                </div>
            </div>
            <div class="list-content text-center">
                <div class="list-body">
                    <a href="<?php echo('http://' . $_SERVER['HTTP_HOST']); ?>/track/?q=<?php echo $row['idx']; ?>"
                       class="list-title title ajax h-1x"
                       style="text-transform: capitalize"><?php echo $row['name']; ?> </a>
                    <a
                            href="#"
                            class="list-subtitle d-block text-muted h-1x subtitle ajax"
                            style="text-transform: capitalize"><?php echo $row['bpm']; ?> BPM
                        | <?php echo $row['tags']; ?> </a></div>
            </div>
            <div class="list-action show-row">
                <div class="d-flex align-items-center">
                    <div class="px-3 text-sm text-muted d-none d-md-block">02:45
                    </div>


                    <button class="gumroad-buttonb btn btn-iconb btn-smn btn-light text-dark text-align-autob btn-m"
                            data-toggle="modal" data-target="#buy_modal" namex="<?php echo $row['name']; ?>"
                            imgx="<?php echo $row['image']; ?>" id="<?php echo $row['idx']; ?>"
                            style="vertical-align: middle;">
                        <i class="icon-add-cart align-middle" style="font-size: 22px;font-weight: 500"></i>
                        <span class="d-none d-lg-inline d-sm-block align-middleb">$19.95</span></button>


                    <a tabindex="0"
                       class="btn btn-icon no-bg no-shadow btn-moreb share-this d-none d-lg-inline d-sm-block"
                       namex="<?php echo $row['name']; ?>"
                       data-container="body" data-toggle="popover" data-placement="top"
                       data-content="Link copied to clipboard!"><i
                                data-feather="share-2"></i></a>

                </div>
            </div>
        </div>
    </div>


<?php } ?>