importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    workbox.precaching.precacheAndRoute([]);
    console.log(`Yay! Workbox is loaded 🎉`);
    // Caching every Image file with the Cache First strategy
    workbox.routing.registerRoute(
        /\.(?:png|jpg|jpeg|svg|webp)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'image-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 20,
                    maxAgeSeconds: 7 * 24 * 60 * 60,
                })
            ],
        })
    );
    // Caching every CSS file with the Stale While Revalidate strategy
    workbox.routing.registerRoute(
        /\.css$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'css-cache',
        })
    );
// Caching every JS file with the Stale While Revalidate strategy
    workbox.routing.registerRoute(
        /\.js$/,
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: "js-cache",
        })
    );
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
/*
function matchFunction({ url }) {
    const pages = ['/', '/offline'];
    return pages.includes(url.pathname);
}

workbox.routing.registerRoute(
    matchFunction,
    new workbox.strategies.CacheFirst({
        cacheName: 'html-cache'
    })
);
*/

