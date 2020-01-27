<script src="../assets/js/site.min.js"></script>
<script src="https://gumroad.com/js/gumroad.js"></script>
<script>
! function(g, s, q, r, d) {
    r = g[r] = g[r] || function() {
        (r.q = r.q || []).push(
            arguments)
    };
    d = s.createElement(q);
    q = s.getElementsByTagName(q)[0];
    d.src = '//d1l6p2sc9645hc.cloudfront.net/tracker.js';
    q.parentNode.
    insertBefore(d, q)
}(window, document, 'script', '_gs');

_gs('GSN-861552-Y');
_gs('set', 'anonymizeIP', true);
</script>

<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(function(registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function(err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }

</script>