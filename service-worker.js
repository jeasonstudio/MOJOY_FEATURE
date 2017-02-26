var CACHE_NAME = 'Mojoy_Single_Page';
var urlsToCache = [
    '/MOJOY_FEATURE/index.html',
    '/MOJOY_FEATURE/src/app.css',
    '/MOJOY_FEATURE/src/app.js',
    '/MOJOY_FEATURE/static/images/full-banner/b1.jpg'
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
    var cacheWhitelist = [CACHE_NAME];
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

// 抓取失败的请求
// this.addEventListener('fetch', function (event) {
//     console.log(event)
//     var response;
//     event.respondWith(caches.match(event.request).catch(function () {
//         return fetch(event.request);
//     }).then(function (r) {
//         response = r;
//         caches.open(CACHE_NAME).then(function (cache) {
//             cache.put(event.request, response);
//         });
//         return response.clone();
//     }).catch(function () {
//         return caches.match('/index.html');
//     }));
// });

// 缓存图片
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            var request = event.request.clone();
            return fetch(request).then(function (response) {
                if (!response && response.status !== 200 && !response.headers.get('Content-type').match(/image/)) {
                    return response;
                }
                var responseClone = response.clone();
                caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            });
        })
    )
});