<?php
session_start();
print_r($_SESSION);

if (isset($_SESSION["email_s"])) {
    echo "";
} else {
    //echo '<script>window.location.replace("/");</script>';
    echo "no sessh vars";
}

?>
<!DOCTYPE html>
<html lang="en-US" dir="ltr">
<title>Niconine Beats - Success</title>


<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include "../include/head.php";
?>


<body class="layout-column bg-dark" style="background-color: black;">
<?php
include "../include/navbar.php";
?>


<div class="p-5"></div>

<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" id="#licenseinfo">
    <h1 class="display-4">Payment Successful</h1>
    <p class="lead"></p>
</div>

<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <h5> An email containing download links & Licence has been sent to <span
                        class="text-primary"><?php echo($_SESSION["email_s"]); ?></span>
            </h5>
            <h5> or <br>
                <a href="/download/?q=<?php echo($_SESSION["id_s"]); ?>" class="btn btn-light text-dark "> Download</a></h5>
            <h5>


            </h5>
        </div>
        <div class="col-lg-6"
             style="background-image: url('../assets/img/payc.png');background-position: center;background-size:contain;background-repeat: no-repeat;min-height: 192px;  ">

        </div>

    </div>


</div>


<?php
$transid=$_SESSION["id_s"];
$to = "cbsoftlabke@gmail.com";//$_SESSION["email_s"]
$subject = "Niconine Beats Order";

$message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width" name="viewport"/>
<!--[if !mso]><!-->
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<!--<![endif]-->
<title></title>
<!--[if !mso]><!-->
<!--<![endif]-->
<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
<style id="media-query" type="text/css">
		@media (max-width: 620px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col>div {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num8 {
				width: 66% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ece8e5;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#ece8e5" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ece8e5; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top;" valign="top">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#ece8e5"><![endif]-->
<div style="background-position:top center;background-repeat:no-repeat;background-color:transparent;">
<div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #ffffff;">
<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url(\'images/bg-image.jpg\');background-position:top center;background-repeat:no-repeat;background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#ffffff;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:60px;"><![endif]-->
<div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">
<div style="width:100% !important;">
<!--[if (!mso)&(!IE)]><!-->
<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:60px; padding-bottom:60px; padding-right: 0px; padding-left: 0px;">
<!--<![endif]-->
<div align="center" class="img-container center autowidth" style="padding-right: 0px;padding-left: 0px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
<div style="font-size:1px;line-height:35px"> </div><a href="http://example.com/" style="outline:none" tabindex="-1" target="_blank"> <img align="center" alt="Logo" border="0" class="center autowidth" src="https://niconinebeats.com/assets/img/fav/apple-icon-180x180.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; width: 100%; max-width: 180px; display: block;" title="Logo" width="180"/></a>
<div style="font-size:1px;line-height:30px"> </div>
<!--[if mso]></td></tr></table><![endif]-->
</div>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 0px; font-family: Georgia, serif"><![endif]-->
<div style="color:#000000;font-family:Georgia, Times, Times New Roman, serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:0px;padding-left:10px;">
<div style="font-size: 14px; line-height: 1.2; color: #000000; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 17px;">
<p style="font-size: 14px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 17px; margin: 0;"><strong><span style="font-size: 72px;">Purchase Order </span></strong></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 0px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
<div style="color:#2b5512;font-family:Georgia, Times, Times New Roman, serif;line-height:1.2;padding-top:0px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-size: 14px; line-height: 1.2; color: #2b5512; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 17px;">
<p style="font-size: 72px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 86px; margin: 0;"></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 40px; padding-left: 40px; padding-top: 10px; padding-bottom: 25px; font-family: Georgia, serif"><![endif]-->
<div style="color:#555555;font-family:Georgia, Times, Times New Roman, serif;line-height:1.8;padding-top:10px;padding-right:40px;padding-bottom:25px;padding-left:40px;">
<div style="line-height: 1.8; font-size: 12px; color: #555555; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 22px;">
<p style="text-align: center; line-height: 1.8; word-break: break-word; mso-line-height-alt: NaNpx; margin: 0;"><strong><span style="font-size: 18px;">Thanks for purchasing!</span></strong></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
<div style="color:#000000;font-family:Georgia, Times, Times New Roman, serif;line-height:1.2;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-size: 14px; line-height: 1.2; color: #000000; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 17px;">
<p style="font-size: 16px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 19px; margin: 0;"><span style="font-size: 16px;"><strong>Here\'s your Download Link</strong></span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<div align="center" class="button-container" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://niconinebeats.com/download/?q='.$transid.'" style="height:49.5pt; width:249.75pt; v-text-anchor:middle;" arcsize="0%" stroke="false" fillcolor="#000000"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Georgia, serif; font-size:18px"><![endif]--><a href="https://niconinebeats.com/download/?q='.$transid.'" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #000000; border-radius: 0px; -webkit-border-radius: 0px; -moz-border-radius: 0px; width: auto; width: auto; border-top: 1px solid #000000; border-right: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; padding-top: 15px; padding-bottom: 15px; font-family: Georgia, Times, Times New Roman, serif; text-align: center; mso-border-alt: none; word-break: keep-all;" target="_blank"><span style="padding-left:40px;padding-right:40px;font-size:18px;display:inline-block;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span data-mce-style="font-size: 18px; line-height: 36px;" style="font-size: 18px; line-height: 36px;"><strong>Download Product</strong></span></span></span></a>
<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
</div>
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 45px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #EAEAEA; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table cellpadding="0" cellspacing="0" class="social_icons" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-top: 25px; padding-right: 10px; padding-bottom: 20px; padding-left: 10px;" valign="top">
<table align="center" cellpadding="0" cellspacing="0" class="social_table" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
<tbody>
<tr align="center" style="vertical-align: top; display: inline-block; text-align: center;" valign="top">
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="http://twitter.com/byniconine" target="_blank"><img alt="Twitter" height="32" src="https://niconinebeats.com/images/twitter2x.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;" title="Twitter" width="32"/></a></td>
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="http://instagram.com/by.niconine" target="_blank"><img alt="Instagram" height="32" src="https://niconinebeats.com/images/instagram2x.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;" title="Instagram" width="32"/></a></td>
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="http://youtube.com/niconine" target="_blank"><img alt="YouTube" height="32" src="https://niconinebeats.com/images/youtube2x.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;" title="YouTube" width="32"/></a></td>
<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 4px; padding-left: 4px;" valign="top"><a href="http://soundcloud.com/byniconine" target="_blank"><img alt="SoundCloud" height="32" src="https://niconinebeats.com/images/soundcloud2x.png" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: none; display: block;" title="SoundCloud" width="32"/></a></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #EAEAEA; width: 100%;" valign="top" width="100%">
<tbody>
<tr style="vertical-align: top;" valign="top">
<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, serif"><![endif]-->
<div style="color:#000000;font-family:Georgia, Times, Times New Roman, serif;line-height:1.5;padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-size: 14px; line-height: 1.5; color: #000000; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21px;">
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 12px;">© Copyright Niconine 2020.</span></p>
<p style="font-size: 12px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 18px; margin: 0;"><span style="font-size: 12px;">All rights reserved.</span></p>
</div>
</div>
<!--[if mso]></td></tr></table><![endif]-->
<!--[if (!mso)&(!IE)]><!-->
</div>
<!--<![endif]-->
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
</div>
</div>
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>';


$header = "From:hello@niconinebeats \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";

//$retval = mail($to, $subject, $message, $header);
$retval="test";
if ($retval == true) {
    echo "Message sent successfully...";
} else {
    echo "Message could not be sent...";
}


?>

<?php
require_once "../include/connect.php";
$sql = $sql = "insert into transactions values('" . $_SESSION["id_s"] . "','" . $_SESSION["email_s"] . "','" . $_SESSION["item_s"] . "','" . $_SESSION["amount_s"] . "','" . $_SESSION["item_s"] . "','" . $_SESSION["time_s"] . "')";
if (isset($_SESSION["email_s"])) {
    if ($con->query($sql) === true) {
        //session_destroy();
        echo "";
    }
} else {
    echo '';
}


?>

<?php
include "../include/footer.php";
?>
<?php
include "../include/end.php";
?>

</body>

</html>