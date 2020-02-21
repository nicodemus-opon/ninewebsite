<?php

include "connect.php";

$sql="select * from beats";
$result = $con->query($sql);
while ($row = $result->fetch_assoc()) {?>

<div class="col-12" data-id="<?php echo $row['idx']; ?>" data-category="other" data-tag="USA"
     data-source="upload/upload/<?php echo $row['audio']; ?>">
    <div class="list-item r">
        <div class="media">
            <a href="/item.detail<?php echo $row['idx']; ?>"
               class="ajaxh media-content"
               style="background-image:url('upload/<?php echo $row['image']; ?>')"></a>
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
                <a href="#"
                   class="list-title title ajax h-1x"><?php echo $row['name']; ?> </a>
                <a
                        href="#<?php echo $row['idx']; ?>"
                        class="list-subtitle d-block text-muted h-1x subtitle ajax"> <i
                            data-feather="activity"></i><?php echo $row['bpm']; ?> BPM | <?php echo $row['tags']; ?> </a></div>
        </div>
        <div class="list-action show-row">
            <div class="d-flex align-items-center">
                <div class="px-3 text-sm text-muted d-none d-md-block">02:45
                </div>
                <a class="gumroad-buttonb btn btn-icon text-white"
                   href="<?php echo $row['gumroad']; ?>" target="_blank"><i
                            data-feather="shopping-cart"
                            class="active-fill"></i></a>
                <a class="btn btn-icon no-bg no-shadow btn-moreb"
                   href="#"><i
                            data-feather="share"></i></a>

            </div>
        </div>
    </div>
</div>


<?php }?>