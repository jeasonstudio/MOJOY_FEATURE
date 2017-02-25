var vm = new Vue({
    el: '#app',
    data: {
        config: [],
        ss: "./static/images/p1.jpg"
    },
    created: function () {
        console.log("sssssss")
        this.$http.get('./static/config/config.json').then((response) => {
            console.log(vm.config)
            vm.config = response.body
            console.log(vm.config)
            // this.$set('config',response.body)
        }, (response) => {
            alert('魔借出了点小错误')
        });
    },
    methods: {
        toProPage: function (id) {
            if (!id) return
            alert(id)

        }
    }
})