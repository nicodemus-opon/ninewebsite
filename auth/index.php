<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Upload</title>

<?php
session_start();

ini_set('upload_max_filesize', '10000M');
ini_set('max_file_uploads', '10000M');
ini_set('post_max_size', '10000M');


?>
<?php
include "../include/head.php";

if (isset($_POST["authkey"])) {
    if (strtoupper(md5($_POST["authkey"])) == "1D5ABDAAEAE84C9F45FEEFEA37726793") {
        $_SESSION["auth"] = true;
        echo "yeeted";
        echo '<script>window.location.replace("../upload");</script>';
    }else{
        echo "invalid key";

    }
} else {
    echo "";


}

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
            <div class="col-lg-6">
                <form class="" method="post" action="index.php" enctype="multipart/form-data">
                    <div class="form-group pt-5">
                        <label for="11">AUTH KEY </label>
                        <input type="password" class="form-control" id="11" name="authkey" placeholder="Key">
                    </div>


                    <input type="submit" class="btn btn-primary btn-block" value="Authenticate">
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