<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCSZ9LQ"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<script src="../assets/js/site.min.js"></script>
<script src="../ven/node_modules/marked/marked.min.js"></script>
<script src="../assets/js/lazysizes.min.js" async=""></script>
<script src="../assets/js/ext.js" async=""></script>
<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/sw.js').then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }

</script>

<!-- Modal -->
<div class="modal fade " id="buy_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="blur-thisb ">
            <div class="modal-content gd-dark wh-modal "
                 style="background-image: url('');background-color: rgba(0,0,0,0.65);background-blend-mode:darken">
                <div class="modal-header">
                    <h5 class="modal-title text-white" id="titlename">Please refresh-Missing Parameters </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4 pb-lg-0 pb-md-3 pb-sm-3">
                            <img src="" class="r shadow dis-img img-fluid"
                                 style="height: 112px">
                        </div>
                        <div class="col-md-8">

                            <div class="form-group pt-3">
                                <label class="text-muted" for="form_need">Please Select licence *</label>
                                <select id="price_selected" name="need" class="form-control selectpicker"
                                        required="required"
                                        data-error="Please specify your need.">
                                    <option value="1">Mp3 ($19.95)</option>
                                    <option value="2">Wav & Mp3 ($49.95)</option>
                                    <option value="3">Mp3, Wav & Stems ($119.95)</option>


                                </select>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">

                    <button type="button" idx="" imgx="" namex="" class="btn btn-light btn-block text-dark btn-buy">Add
                        to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title text-dark" id="exampleModalLabel">
                    Your Cart
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body table-responsive">
                <table class="table table-image">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Track</th>
                        <th scope="col">Licence</th>

                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="fill_cart">

                    </tbody>
                </table>
                <div class="d-flex justify-content-end">
                    <h5 class="text-dark">Total: $<span class="price text-success cart_full"></span></h5>
                </div>
            </div>
            <div class="modal-footer border-top-0 d-flex justify-content-between">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <a href="../checkout" class="btn btn-success">Checkout</a>
            </div>
        </div>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="linkmodal" tabindex="-1" role="dialog" aria-labelledby="elinkmodal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content text-dark">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <input class="form-control" type="text" placeholder="Readonly input here..." readonly>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

            </div>
        </div>
    </div>
</div>
<script>
    function show_spinner () {
        document.getElementById("spinner-front").classList.add("show");
        document.getElementById("spinner-back").classList.add("show");
    }
    function hide_spinner () {
        document.getElementById("spinner-front").classList.remove("show");
        document.getElementById("spinner-back").classList.remove("show");
    }
</script>
<script>
    $(".launch_cart").click(function () {
        show_spinner();
        get_total_amount();
        get_total();

        if ($(".cart_total").html() === "0") {
            get_total();
            hide_spinner();
        } else {

            view_cart();
            hide_spinner();
        }

    });


    $(".btn-m").click(function () {
        console.log($(this).attr("id"));
        var idx = $(this).attr("id");
        var imgx = "../upload/" + $(this).attr("imgx");
        var namex = "Purchase " + $(this).attr("namex") + ' (Instrumental) ';
        var nmm = $(this).attr("namex");
        $(".dis-img").attr("src", imgx);
        $(".btn-buy").attr("idx", idx);
        $(".btn-buy").attr("namex", nmm);
        $(".btn-buy").attr("imgx", imgx);
        $("#titlename").html(namex);
        var style = "background-image: url('" + imgx + "');background-color: rgba(0,0,0,0.65);background-blend-mode:darken";
        $(".wh-modal").attr("style", style);
    });

    $(".btn-buy").click(function () {
        $('#buy_modal').modal('hide');
        var product_id = $(this).attr("idx");
        var pr = $('#price_selected').val();
        var product_name = $(this).attr("namex");
        var product_img = $(this).attr("imgx");


        var action = "add";
        show_spinner();
        $.ajax({
            url: "../include/cart.php",
            method: "POST",
            data: {
                product_id: product_id,
                product_name: product_name, product_img: product_img,
                pr: pr,
                action: action
            },
            success: function (data) {
                //alert(data);
                get_total_amount();
                get_total();
                view_cart();
                hide_spinner();
            }
        });


    });

    $(".delete_itemc").click(function () {
        console.log("ll");
        var ii = $(this).attr("idx");
        remove(ii);
    });


    function get_total() {
        $.ajax({
            url: "../include/cart.php",
            method: "POST",
            data: {
                action: "get_total"
            },
            success: function (data) {
                get_total_amount();
                $(".cart_total").html(data);
            }
        });
    }

    function view_cart() {
        $.ajax({
            url: "../include/cart.php",
            method: "POST",
            data: {
                action: "view"
            },
            success: function (data) {

                $("#fill_cart").html(data);
                feather.replace();
                $('#cartModal').modal('show');
            }
        });
    }

    function display_cart() {
        $.ajax({
            url: "../include/cart.php",
            method: "POST",
            data: {
                action: "view"
            },
            success: function (data) {

                $("#fill_cart").html(data);
                $("td").addClass("text-white");
                feather.replace();

            }
        });
    }

    function get_total_amount() {
        $.ajax({
            url: "../include/cart.php",
            method: "POST",
            data: {
                action: "get_total_amount"
            },
            success: function (data) {
                console.log(data);
                $(".cart_full").html(data);
            }
        });
    }

    function remove(idx) {
        var row = "#row" + idx;
        $(row).remove();
        show_spinner();
        $.ajax({
            url: "../include/cart.php",
            method: "POST",
            data: {
                action: "remove",
                product_id: idx

            },
            success: function (data) {
                console.log(data);
                get_total_amount();
                get_total();
                hide_spinner();
            }
        });
    }

    function clear_cart() {
        $.ajax({
            url: "../include/cart.php",
            method: "POST",
            data: {
                action: "clear_cart"
            },
            success: function (data) {
                console.log(data);
                get_total();
            }
        });
    }

    $(document).on("click", ".delete_item", function (event) {
        console.log("ll");
        var ii = $(this).attr("idx");
        remove(ii);
    });

    $(document).ready(function () {

        feather.replace();


        get_total_amount();
        get_total();
    });

</script>

<script>
    let deff="Music Producer Specialized in Dancehall, Afro, Moombahton, Reggaeton and Trap Instrumental Beats. Beat Leases and Exclusive purchases available & special offers";
    let deffimg="";
    $(".seotitle").attr("content",document.title);
    //document.getElementsByTagName('meta')["title"].content=document.title;
    console.log($(".seotitle").attr("content"));
    $(".seourl").attr("content",window.location.href);
    if (window.location.href.indexOf('track') > 0) {
        // ... do something

        let texto=$(".track-details").attr("name")+" "+$(".track-details").attr("tags")+" instrumental beat - by Niconine for lease";
        let imgg=$(".track-details").attr("image");
        $(".seodescription").attr("content",texto);
        $(".seoimage").attr("content",imgg);

    }

</script>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script>
    var basiclicence="";

    $(".basic-lease").click(function () {
        jQuery.get('../licence/basic.md', function(data) {
            basiclicence=data;
            document.getElementById('contentbasic').innerHTML =
                marked(basiclicence);
        });
        $('#basiclease').modal('show');
        $('.lease-title').html("Basic Lease (Mp3)")
    });
    $(".premium-lease").click(function () {
        jQuery.get('../licence/premium.md', function(data) {
            basiclicence=data;
            document.getElementById('contentbasic').innerHTML =
                marked(basiclicence);
        });
        $('#basiclease').modal('show');
        $('.lease-title').html("Premium Lease (Mp3 + Wav)")
    });
    $(".unlimited-lease").click(function () {
        jQuery.get('../licence/unl.md', function(data) {
            basiclicence=data;
            document.getElementById('contentbasic').innerHTML =
                marked(basiclicence);
        });
        $('#basiclease').modal('show');
        $('.lease-title').html("Trackouts Lease (Stems + Wav + Mp3)")
    });


    $(".share-this").click(function () {
        var thislink=$(this).attr("namex");
        var linktxt = "https://niconinebeats.com/?ft="+thislink;
        navigator.clipboard.writeText(linktxt).then(function() {
            console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
            console.error('Async: Could not copy text: ', err);
        });
        //$("#linkmodal").modal("show");
    });
    $('body').on('click', function (e) {
        $('[data-toggle=popover]').each(function () {
            // hide any open popovers when the anywhere else in the body is clicked
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });
</script>