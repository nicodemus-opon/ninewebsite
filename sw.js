importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

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