var CACHE_NAME = 'benjanik';
var urlsToCache = [
    'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
    'https://fonts.googleapis.com/css?family=Open+Sans:400,300,600',
    'https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700',
    'https://fonts.googleapis.com/css?family=Volkhov:400italic',
    'https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2',
    'https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2',
    'https://fonts.gstatic.com/s/volkhov/v10/SlGSmQieoJcKemNecTA0h1R3Qj4dYg.woff2',
    'https://fonts.gstatic.com/s/opensans/v16/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2',
    'https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
    'https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2',
    'https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2',
    'https://fonts.gstatic.com/s/opensans/v16/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2',
    '/',
    '/sw.js',
    '/manifest.json',
    '/favicon.ico',
    '/index.html',
    '/css/animate.css',
    '/css/bootstrap.min.css',
    '/css/font-awesome.min.css',
    '/css/ionicons.min.css',
    '/css/owl.carousel.css',
    '/css/responsive.css',
    '/css/style.css',
    '/js/min/main.min.js',
    '/js/min/plugins.min.js',
    '/js/min/waypoints.min.js',
    '/js/vendor/jquery-1.10.2.min.js',
    '/js/bootstrap.min.js',
    '/js/google-map-init.js',
    '/js/jquery.counterup.js',
    '/js/main.js',
    '/js/owl.carousel.min.js',
    '/js/plugins.js',
    '/img/clients/beautiful.png',
    '/img/clients/birst.png',
    '/img/clients/dimensiondata.png',
    '/img/clients/mirror.png',
    '/img/clients/moog.png',
    '/img/clients/viscira.png',
    '/img/ani.png',
    '/img/call-to-action-bg.jpg',
    '/img/cotation.png',
    '/img/featue-bg.jpg',
    '/img/islay.png',
    '/img/snow.png',
    '/img/snow-compressed.jpg',
    '/img/wrapper-img.gif',
    '/img/icon-192.png',
    '/img/icon-512.png',
    '/fonts/fontawesome-webfont.woff?v=4.2.0',
    '/fonts/ionicons.ttf?v=2.0.0',
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});