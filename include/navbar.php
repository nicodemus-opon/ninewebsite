<!-- [THE SPINNER - THIS IS ALL YOU NEED] -->
<div id="spinner-front">
    <img src="assets/img/91.svg"/><br>

</div>
<div id="spinner-back"></div>
<style>
    #login-nav input {
        margin-bottom: 15px;
    }
</style>
<header id="header" class="page-header scroll-header fixed">
    <div class="navbar navbar-expand-lg">
        <a href="../" class="navbar-brand text-white">  <span
                    class="hidden-folded d-inline l-s-n-1xh pl-lg-5 ">Niconine Beats</span></a>
        <div class="collapse navbar-collapse order-2 order-lg-1" id="navbarCollapse">
            <ul class="navbar-nav" data-nav>
                <?php

                ?>




                <li class="nav-item"><a href="../free-beats" class="nav-link"><span class="nav-text">❤️Free Beats</span></a>
                </li>
                <li class="nav-item"><a href="../licence" class="nav-link"><span
                                class="nav-text">Licences & Pricing</span></a>
                </li>
                <li class="nav-item"><a href="../contact" class="nav-link"><span class="nav-text">Contact</span></a>
                </li>

            </ul>
            <form class="input-group m-2 my-lg-0" action="/search" method="post">
                <span class="input-group-prepend">
                <button type="button"
                        class="btn no-shadow no-bg px-0"><i
                            data-feather="search"></i></button>
                </span>
                <input type="text" class="form-control no-border no-shadow no-bg typeahead"
                       placeholder="Search Beats..."
                       data-plugin="typeahead">
            </form>
        </div>
        <ul class="nav navbar-menu order-1 order-lg-2">

            <li class="nav-item d-none d-sm-block"><a class="nav-link px-2" href="https://www.youtube.com/niconine"
                                                      target="_blank"><i data-feather="youtube"></i></a></li>
            <li class="nav-item d-none d-sm-block"><a class="nav-link px-2" href="https://www.twitter.com/byniconine"
                                                      target="_blank"><i data-feather="instagram"></i></a></li>
            <li class="nav-item d-none d-sm-block"><a class="nav-link px-2" href="https://www.instagram.com/by.niconine"
                                                      target="_blank"><i data-feather="twitter"></i></a></li>

            <li class="nav-item dropdown">
                <a class="nav-link px-2 launch_cart kill_cart" id="navbarDropdown" role="button">
                    <i data-feather="shopping-cart"
                       class="d-lg-nonen"></i>
                    <span class="text-sm badge cart_total" style="">
0
                    </span>
                </a>


            </li>


            <li class="nav-item d-lg-none"><a href="#" class="nav-link px-2" data-toggle="collapse" data-toggle-class
                                              data-target="#navbarCollapse"><i data-feather="menu"></i></a></li>
        </ul>

    </div>
</header>
