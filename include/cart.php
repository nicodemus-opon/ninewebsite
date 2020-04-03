<?php

session_start();

if (empty($_SESSION["shopping_cart"])) {
    $_SESSION["shopping_cart"] = array();
}


if (isset($_POST["action"])) {

    if ($_POST["action"] == "add") {
        $id = $_POST["product_id"];
        $name = $_POST["product_name"];

        $img = $_POST["product_img"];

        $pr = $_POST["pr"];
        if ($pr === "1") {
            $price = 19.95;
        } else if ($pr === "2") {
            $price = 49.95;
        } else if ($pr === "3") {
            $price = 119.95;
        }

        if ($pr === "1") {
            $lease = "Mp3 Lease";
        } else if ($pr === "2") {
            $lease = "Wav Lease";
        } else if ($pr === "3") {
            $lease = "Trackouts Lease";
        }
        $_SESSION["shopping_cart"][$id] = array(
            "idx" => $id,
            "name" => $name,
            "price" => $price,
            "img" => $img,
            "lease" => $lease,
        );
        print_r($_SESSION["shopping_cart"]);

    } else if ($_POST["action"] == "view") {
        $keys = array_keys($_SESSION["shopping_cart"]);
        //print_r($keys);

        for ($i = 0; $i < count($_SESSION["shopping_cart"]); $i++) {
            echo '<tr id="row' . $_SESSION["shopping_cart"][$keys[$i]]["idx"] . '">
                        <td class="">
                            <img src="' . $_SESSION["shopping_cart"][$keys[$i]]["img"] . '"
                                 class="img-fluid img-thumbnail" style="height: 48px" alt="Sheep">
                        </td>
                        <td><b style="text-transform: uppercase">' . $_SESSION["shopping_cart"][$keys[$i]]["name"] . '</b></td>

                        <td class="text-left" style="text-transform: uppercase">' . $_SESSION["shopping_cart"][$keys[$i]]["lease"] . '</td>
                        <td>$ ' . $_SESSION["shopping_cart"][$keys[$i]]["price"] . '</td>
                        <td>
                            <button idx="' . $_SESSION["shopping_cart"][$keys[$i]]["idx"] . '" class="btn bg-transparent btn-sm delete_item">
                                <i data-feather="trash-2" class="active-fill text-danger " style="f"></i> remove
                            </button>
                        </td>
                    </tr>';


        }

    } else if ($_POST["action"] == "get_total_amount") {
        $keys = array_keys($_SESSION["shopping_cart"]);
        //print_r($keys);
        $totalx = 0;

        for ($i = 0; $i < count($_SESSION["shopping_cart"]); $i++) {
            $totalx += $_SESSION["shopping_cart"][$keys[$i]]["price"];

        }
        echo number_format((float)$totalx, 2, '.', '');


    } else if ($_POST["action"] == "clear_cart") {
        unset($_SESSION["shopping_cart"]);
        echo "Cart has been cleared";

    } else if ($_POST["action"] == "get_total") {
        echo count(array_keys($_SESSION["shopping_cart"]));

    } else if ($_POST["action"] == "remove") {

        unset($_SESSION["shopping_cart"][$_POST["product_id"]]);

        //echo $_POST["product_id"] . " has been removed";

    }
}

?>