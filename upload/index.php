<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Upload</title>
<?php
session_start();

ini_set('upload_max_filesize','100M');
ini_set('max_file_uploads','100M');
ini_set('post_max_size','100M');
?>
<?php
include "../include/head.php";
?>


<body class="layout-column bg-dark" style="background-color: black;">
<?php
include "../include/navbar.php";
?>
<div id="main" class="layout-row flex">
    <div id="container" class="flexf container pt-5">
        <div class="row pt-5">
            <div class="col-3">

            </div>
            <div class="col-6">
                <form class="" method="post" action="../upload/action.php" enctype="multipart/form-data">
                    <div class="form-group">
                        <label for="11">Title</label>
                        <input type="text" class="form-control" id="11" name="title" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Image</label>
                        <input type="file" class="form-control" name="image" placeholder="Image">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Audio</label>
                        <input type="file" class="form-control" name="audio" placeholder="Image">
                    </div>
                    <div class="form-group">
                        <label for="11">Bpm</label>
                        <input type="text" class="form-control" name="bpm" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Tags</label>
                        <input type="text" class="form-control" name="tags" placeholder="Tags">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Gumroad</label>
                        <input type="text" class="form-control" name="gumroad" placeholder="Gumroad link">
                    </div>
                    <input type="submit" class="btn btn-primary btn-block" value="Upload">
                </form>
            </div>
            <div class="col-3">

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