var vm = new Vue({
    el: '#app',
    data: {
        config: []
    },
    created: function () {
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
            if (isAndroid && !isiOS) {
                alert('Android:' + (id ? ('物品 id：' + id) : '') + (name ? (',物品名称：' + name) : name))
                Android.search(name);
            } else if (isiOS && !isAndroid) {
                alert('ios:' + (id ? ('物品 id：' + id) : '') + (name ? (',物品名称：' + name) : name))
                window.NativeBridge('fetchMessage', {
                    'type': 1,
                    'id': id
                });
            } else {
                console.log('Some Error:Not Android or Ios')
            }
        }
    }
})