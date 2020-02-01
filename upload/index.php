<!DOCTYPE html>
<html lang="en-US" dir="ltr">

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
                <form>
                    <div class="form-group">
                        <label for="11">Title</label>
                        <input type="text" class="form-control" id="11" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Image</label>
                        <input type="file" class="form-control" id="22" placeholder="Image">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Audio</label>
                        <input type="file" class="form-control" id="22" placeholder="Image">
                    </div>
                    <div class="form-group">
                        <label for="11">Bpm</label>
                        <input type="text" class="form-control" id="11" placeholder="Title">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Tags</label>
                        <input type="text" class="form-control" id="22" placeholder="Image">
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Gumroad</label>
                        <input type="text" class="form-control" id="22" placeholder="Image">
                    </div>
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