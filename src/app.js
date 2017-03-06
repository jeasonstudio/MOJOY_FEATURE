var vm = new Vue({
    el: '#app',
    data: {
        config: []
    },
    created: function () {
        // 注册 serviceWorker
        if (navigator.serviceWorker) {
            navigator.serviceWorker.register('/MOJOY_FEATURE/service-worker.js', {
                scope: '/MOJOY_FEATURE/'
            }).then(function (registration) {
                if (registration.installing) {
                    console.log('Service worker installing');
                } else if (registration.waiting) {
                    console.log('Service worker installed');
                } else if (registration.active) {
                    console.log('Service worker active');
                }
                // console.log('service worker 注册成功');
            }).catch(function (err) {
                console.log('servcie worker 注册失败', err)
            });
        }
        // 获取配置文件
        this.$http.get('./static/config/config.json').then((response) => {
            vm.config = response.body
            console.log(vm.config)
        }, (response) => {
            alert('魔借出了点小问题')
        });
    },
    methods: {
        toProPage: function (id, name) {
            if (!id && !name) return

            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            // alert('test：Android:' + (id ? ('物品 id：' + id) : '') + (name ? (',物品名称：' + name) : name))
            if (id) {
                if (isAndroid && !isiOS) {
                    Android.findProduct(string(id));
                } else if (isiOS && !isAndroid) {
                    window.NativeBridge('fetchMessage', {
                        'type': 1,
                        'id': id
                    });
                } else {
                    console.log("ERROR")
                }
            } else if (name) {
                if (isAndroid && !isiOS) {
                    Android.search(name);
                } else if (isiOS && !isAndroid) {
                    window.NativeBridge('fetchMessage', {
                        'type': 2,
                        'key': name
                    });
                } else {
                    console.log("ERROR")
                }
            } else {
                console.log('Some Error')
            }

        }
    }
})