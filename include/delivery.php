<?php
/*
This call sends a message to the given recipient with vars and custom vars.
*/
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


set_time_limit(0);


//$emailx = $_POST["email"];
$emailx="nicodemusopon@gmail.com";
$namex = "passenger";
$imagex = $_POST["product_image"];
$prodl = $_POST["product_link"];
$licencel = $_POST["licence_link"];


require '../vendor/autoload.php';

use \Mailjet\Resources;

$mj = new \Mailjet\Client("113e80d77031845d57189f6ffb0bc119", "ddff0dcc41a34636d1722ced3736ca12",
    true, ['version' => 'v3.1']);

$variablesx = '{
    "image_url": "' . $imagex . '",
    "product_link": "' . $prodl . '",
    "licence_link": "' . $licencel . '"
  }';
$body = [
    'Messages' => [
        [
            'From' => [
                'Email' => "hello@niconinebeats.com",
                'Name' => "Niconine"
            ],
            'To' => [
                [
                    'Email' => "$emailx",
                    'Name' => "$namex"
                ]
            ],
            'TemplateID' => 1536486,
            'TemplateLanguage' => true,
            'Subject' => "Niconine Beats Order Confirmation",
            'Variables' => json_decode($variablesx, true)
        ]
    ]
];

//print_r($body);

    $response = $mj->post(Resources::$Email, ['body' => $body, 'connect_timeout' => 0,
        'timeout' => 0]);
    $response->success() && var_dump($response->getData());

?>