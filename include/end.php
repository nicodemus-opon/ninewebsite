<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MCSZ9LQ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
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
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="blur-thisb ">
            <div class="modal-content gd-dark wh-modal p-3"
                 style="background-image: url('');background-color: rgba(0,0,0,0.65);background-blend-mode:darken">
                <div class="modal-header">
                    <h5 class="modal-title text-white text-muted" id="titlename">Please refresh-Missing Parameters </h5>
                    <button typeb="button" class=" btn closev no-bg" data-dismiss="modal" aria-label="Close">
                        <i data-feathevr="close" class="icon-close"></i>
                        <!--span aria-hidden="true">&times;</span-->
                    </button>
                </div>
                <div class="modal-body ">
                    <div class="row">
                        <div class="col-md-6 pb-lg-0 pb-md-3 pb-sm-3">
                            <img src="" class="r shadow dis-img img-fluid"
                                 style="height: 112px;width: 112px;
  object-position: center; /* Center the image within the element */">
                            <div class="row">
                                <div class="col-12 pt-4 pb-2">
                                    <button class="btn p-0 btn-primaryb text-muted btn-link btn-sm" type="button"
                                            data-toggle="collapse" data-target="#collapseExample" aria-expanded="false"
                                            aria-controls="collapseExample">
                                        <i data-feather="chevron-down" class="active-fill"></i> Show Usage terms
                                    </button>
                                </div>
                            </div>
                            <div class="row collapse collapsex" id="collapseExample">
                                <div class="col-6 pt-4">
                                    <i class="icon-bcon-record primary-btn-bg-color-color "
                                       style="font-size: 22px;"></i>
                                    <span class="irecord">Used for Music Recording</span>
                                </div>
                                <div class="col-6  pt-4">
                                    <i class="icon-bcon-distribute primary-btn-bg-color-color "
                                       style="font-size: 22px;"></i>
                                    <span class="idistribute">Distribute up to 10000 copies</span>
                                </div>
                                <div class="col-6  pt-4">
                                    <i class="icon-bcon-stream-music primary-btn-bg-color-color"
                                       style="font-size: 22px;"></i>
                                    <span class="istreams">10000 Online Audio Streams</span>
                                </div>
                                <div class="col-6  pt-4">
                                    <i class="icon-bcon-video primary-btn-bg-color-color" style="font-size: 22px;"></i>
                                    <span class="ivideo">1 Music Video</span>
                                </div>
                                <div class="col-6  pt-4">
                                    <i class="icon-bcon-live-performance primary-btn-bg-color-color"
                                       style="font-size: 22px;"></i>
                                    <span class="ilive">Non-profit Live Performances only</span>
                                </div>
                                <div class="col-6  pt-4">
                                    <i class="icon-bcon-broadcasting primary-btn-bg-color-color"
                                       style="font-size: 22px;"></i>
                                    <span class="iradio">Radio Broadcasting rights (2 Stations)</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 prices-prices">
                            <p class="lead text-muted pt-2">
                                Please Select licence *
                            </p>
                            <label>
                                <input type="radio" name="demo" vt="1" checked="checked"
                                       class="card-input-element d-none" id="demo1">
                                <div vt="1"
                                     class="card card-body mb-0 text-white clean-card  d-flex flex-row justify-content-between align-items-center"
                                     ripple="ripple">
                                    Mp3 - $19.95
                                </div>
                            </label>
                            <label class="mt-2">
                                <input type="radio" name="demo" vt="2" class="card-input-element d-none" value="demo2">
                                <div vt="2"
                                     class="card card-body  text-white clean-card  mb-0 d-flex flex-row justify-content-between align-items-center"
                                     ripple="ripple">
                                    Wav & Mp3 - $49.95
                                </div>
                            </label>
                            <label class="mt-2">
                                <input type="radio" name="demo" vt="3" class="card-input-element d-none" value="demo2">
                                <div vt="2"
                                     class="card card-body  text-white clean-card  mb-0 d-flex flex-row justify-content-between align-items-center"
                                     ripple="ripple">
                                    Mp3, Wav & Stems - $119.95
                                </div>
                            </label>
                            <!--div class="form-group pt-3">
                                <label class="text-muted" for="form_need">Please Select licence *</label>
                                <select id="price_selected" name="need" class="form-control selectpicker "
                                        required="required"
                                        data-error="Please specify your need.">
                                    <option value="1">Mp3 ($19.95)</option>
                                    <option value="2">Wav & Mp3 ($49.95)</option>
                                    <option value="3">Mp3, Wav & Stems ($119.95)</option>


                                </select>
                                <div class="help-block with-errors"></div>
                            </div-->
                        </div>
                    </div>
                </div>
                <div class="modal-footern px-3">

                    <button type="button" idx="" imgx="" namex=""
                            class="btn btn-lightb text-light btn-primary py-2 btn-block text-darkb btn-buy"
                            style="text-transform: uppercase" ripple="ripple">Add
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
        <div class="modal-content ">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title text-dark " id="exampleModalLabel">
                    <b> Your Cart</b>
                </h5>
                <button type="button" class="close text-dark" data-dismiss="modal" aria-label="Close">
                    <i data-feathevr="close" class="icon-close"></i>
                </button>
            </div>
            <div class="modal-body table-responsive">
                <table class="table table-image">
                    <thead>
                    <tr>
                        <th scope="col" class="bg-whiteb border-0">#</th>
                        <th scope="col" class="bg-whiteb border-0">Track</th>
                        <th scope="col" class="bg-whiteb border-0">Licence</th>

                        <th scope="col" class="bg-whiteb border-0">Price</th>
                        <th scope="col" class="bg-whiteb border-0">Actions</th>
                    </tr>
                    </thead>
                    <tbody id="fill_cart">

                    </tbody>
                </table>
                <div class="d-flex justify-content-end">
                    <h5 class="text-dark">Total: $<span class="price text-primary cart_full"></span></h5>
                </div>
            </div>
            <div class="modal-footer border-top-0 d-flex justify-content-between">

                <!--button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button-->
                <div class="align-self-start">
                    <img class="text-left justify-content-start text-left"
                         style="width: 200px" src="../images/payments.png">
                    <img class="text-left justify-content-start text-left" style="height: 24px"
                         src="../images/mpesa.png">
                </div>

                <a href="../checkout" class="btn btn-primary text-light p-2" ripple="ripple">CHECKOUT</a>
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
    function show_spinner() {
        document.getElementById("spinner-front").classList.add("show");
        document.getElementById("spinner-back").classList.add("show");
    }

    function hide_spinner() {
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
        var namex = "Purchase " + $(this).attr("namex") + ' - Instrumental ';
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
        var pr = $(".prices-prices").find('input:radio[name=demo]:checked').attr("vt");
        //var pr = $('#price_selected').val();
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
    let deff = "Music Producer Specialized in Dancehall, Afro, Moombahton, Reggaeton and Trap Instrumental Beats. Beat Leases and Exclusive purchases available & special offers";
    let deffimg = "";
    $(".seotitle").attr("content", document.title);
    //document.getElementsByTagName('meta')["title"].content=document.title;
    console.log($(".seotitle").attr("content"));
    $(".seourl").attr("content", window.location.href);
    if (window.location.href.indexOf('track') > 0) {
        // ... do something

        let texto = $(".track-details").attr("name") + " " + $(".track-details").attr("tags") + " instrumental beat - by Niconine for lease";
        let imgg = $(".track-details").attr("image");
        $(".seodescription").attr("content", texto);
        $(".seoimage").attr("content", imgg);

    }

</script>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script>
    var basiclicence = "";

    $(".basic-lease").click(function () {
        jQuery.get('../licence/basic.md', function (data) {
            basiclicence = data;
            document.getElementById('contentbasic').innerHTML =
                marked(basiclicence);
        });
        $('#basiclease').modal('show');
        $('.lease-title').html("Basic Lease (Mp3)")
    });
    $(".premium-lease").click(function () {
        jQuery.get('../licence/premium.md', function (data) {
            basiclicence = data;
            document.getElementById('contentbasic').innerHTML =
                marked(basiclicence);
        });
        $('#basiclease').modal('show');
        $('.lease-title').html("Premium Lease (Mp3 + Wav)")
    });
    $(".unlimited-lease").click(function () {
        jQuery.get('../licence/unl.md', function (data) {
            basiclicence = data;
            document.getElementById('contentbasic').innerHTML =
                marked(basiclicence);
        });
        $('#basiclease').modal('show');
        $('.lease-title').html("Trackouts Lease (Stems + Wav + Mp3)")
    });


    $(".share-this").click(function () {
        var thislink = $(this).attr("namex");
        var linktxt = "https://niconinebeats.com/?ft=" + thislink;
        navigator.clipboard.writeText(linktxt).then(function () {
            console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
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

<!--ripple effect-->


<script>
    (function () {
        var cleanUp, debounce, i, len, ripple, rippleContainer, ripples, showRipple;

        debounce = function (func, delay) {
            var inDebounce;
            inDebounce = undefined;
            return function () {
                var args, context;
                context = this;
                args = arguments;
                clearTimeout(inDebounce);
                return inDebounce = setTimeout(function () {
                    return func.apply(context, args);
                }, delay);
            };
        };

        showRipple = function (e) {
            var pos, ripple, rippler, size, style, x, y;
            ripple = this;
            rippler = document.createElement('span');
            size = ripple.offsetWidth;
            pos = ripple.getBoundingClientRect();
            x = e.pageX - pos.left - (size / 2);
            y = e.pageY - pos.top - (size / 2);
            style = 'top:' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';
            ripple.rippleContainer.appendChild(rippler);
            return rippler.setAttribute('style', style);
        };

        cleanUp = function () {
            while (this.rippleContainer.firstChild) {
                this.rippleContainer.removeChild(this.rippleContainer.firstChild);
            }
        };

        ripples = document.querySelectorAll('[ripple]');

        for (i = 0, len = ripples.length; i < len; i++) {
            ripple = ripples[i];
            rippleContainer = document.createElement('div');
            rippleContainer.className = 'ripple--container';
            ripple.addEventListener('mousedown', showRipple);
            ripple.addEventListener('mouseup', debounce(cleanUp, 2000));
            ripple.rippleContainer = rippleContainer;
            ripple.appendChild(rippleContainer);
        }
    }());
</script>

<script>

    $(".search-tag").keyup(function () {
        if ($.trim($('.search-tag').val()).length === 0) {
            //$('.search-b').prop('disabled', true);
            $('.search-b').attr("type", "button");
        } else {
            $('.search-b').attr("type", "submit");
        }
        console.log("jj");
        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(),
            count = 0;

        if ($.trim($('.search-tag').val()).length >= 2) {
            // Loop through the comment list

            $('.lolo').each(function () {


                // If the list item does not contain the text phrase fade it out
                if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                    $(this).hide();  // MY CHANGE

                    // Show the list item if the phrase matches and increase the count by 1
                } else {
                    if (count < 3) {

                        $(this).show(); // MY CHANGE
                        count += 1;
                    } else {
                        return false;
                    }
                }

            });

            $('.listo').show();

        } else {
            $('.listo').hide();
        }

    });


</script>
<script>
    $(document).ready(function () {
        $(".sonento").css({
            'width': ($(".parento").width() + 'px')
        });

        $(".xoxog").blur(function () {
            $('#searchlist').hide();
        });
        $(document).mouseup(function (e) {
            var container = $(".xoxo");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".listo").hide()
            }
        });
        $('.timesb').each(function () {
            console.log("khkhk");
// Request URL of the Audio File
            var mp3file = $(this).attr("itt");
            console.log(mp3file);
            var thisForm = this;
// Create an instance of AudioContext
            var audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Open an Http Request
            var request = new XMLHttpRequest();
            request.open('GET', mp3file, true);
            request.responseType = 'arraybuffer';
            request.onload = function () {
                audioContext.decodeAudioData(request.response, function (buffer) {
                    // Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
                    var duration = buffer.duration;
                    var minutes = parseInt(duration / 60, 10);
                    var seconds = parseInt(duration % 60);
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }
                    var fullt = minutes + ':' + seconds;
                    $(thisForm).html(fullt);
                    // example 12.3234 seconds
                    console.log("The duration of the song is of: " + duration + " seconds");
                    console.log("hejhej")
                    // Alternatively, just display the integer value with
                    // parseInt(duration)
                    // 12 seconds
                });
            };


// Start Request
            request.send();
        });
    });

    $(window).resize(function () {
        $(".sonento").css({
            'width': ($(".parento").width() + 'px')
        });
    });

    $(".pjaxContainer").on("pjax:beforeSend", function (e, xhr, settings) {

        // URI can be found at https://github.com/medialize/URI.js
        var uri = URI(settings.url);

        // Remove _pjax from query string before reloading
        uri.removeSearch("_pjax");

        location.href = uri.toString();
        return false;

    });


    if ($(window).width() > 992) {
        $(".collapsex").collapse('show');
    }


    function setlic(rec, dis, strm, vid, liv, bro) {
        $(".irecord").html(rec);
        $(".idistribute").html(dis);
        $(".istreams").html(strm);
        $(".ivideo").html(vid);
        $(".ilive").html(liv);
        $(".iradio").html(bro);
    }

    $(".card-input-element").change(function () {
        var tu = $(this).attr("vt");
        if (tu === "1") {
            setlic("Used for Music Recording", "Distribute up to 10000 copies",
                " 10000 Online Audio Streams", "1 Music Video", "Non-profit Live Performances only",
                "Radio Broadcasting rights (2 Stations)")
        } else if (tu === "2") {
            setlic("Used for Music Recording", "Distribute up to 100000 copies",
                " 100000 Online Audio Streams", "1 Music Video", "For-profit Live Performances",
                "Radio Broadcasting rights (5 Stations)")
        } else if (tu === "3") {
            setlic("Used for Music Recording", "Distribute up to 1000000+ copies",
                " 1000000+ Online Audio Streams", "Unlimited Music Videos", "For-profit Live Performances",
                "Radio Broadcasting rights (Unlimited Stations)")
        }

    });


</script>

<script>

</script>