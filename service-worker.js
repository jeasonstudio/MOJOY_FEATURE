var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/index.html',
    '/src/app.css',
    '/src/app.js'
    // '/static/images/**/*.jpg'
];

// 添加缓存文件数组
self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// 循环更新缓存
self.addEventListener('activate', function (event) {
    var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});