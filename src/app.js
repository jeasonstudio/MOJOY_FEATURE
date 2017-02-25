new Vue({
    el: '#app',
    data: {
        greeting: 'Welcome to your Vue.js app!',
        docsURL: 'http://vuejs.org/guide/',
        gitterURL: 'https://gitter.im/vuejs/vue',
        forumURL: 'http://forum.vuejs.org/'
    },
    // ready: function () {
    //     this.$http.get('CardboardPrice.json').then((response) => {
    //         alert(1);
    //     }, (response) => {
    //         // error callback
    //     });
    // },
    methods: {
        humanizeURL: function (url) {
            return url
                .replace(/^https?:\/\//, '')
                .replace(/\/$/, '')
        }
    }
})