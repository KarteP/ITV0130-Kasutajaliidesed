let app = new Vue({
    el: '#app2',
    computed: {
      message2: function() {
          return "[" + this.$data.message + "]"
      }
    },
    data: {
        name: '',
        content: 'Content'
    }
});

let a = new Vue({
    el: '#app3',
    data: {
        message: 'Hello Vue.js 3!',
        content: 'Content'
    }
});
