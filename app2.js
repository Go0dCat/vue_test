new Vue({
  el: '#vue-app',
  data: {
    available:false,
    nearby:false

  },
  methods: {
    boolAvaiable: function() {
      this.available = !this.available;
    },
    boolNearby: function() {
      this.nearby = !this.nearby;
    }

  },

  computed: {
    compClasses: function() {
      return {
        available:this.available,
        nearby: this.nearby
      }
    }

  }
});
