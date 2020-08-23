new Vue({
  el: '#vue-app',
  data: {
    name: 'Sara',
    dog: 'Hiko',
    age: 28,
    website: 'http://zarajonsson.com',
    webTag: '<a href="http://zarajonsson.com">Zara Jonsson</a>',
    x: 0,
    y: 0,
    stuff: '',
    a: 0,
    b: 0,
  },
  methods: {
    greet: function(stuff){
      return stuff + ' ' + this.name;
    },
    addYear: function(years){
      this.age+= years;
    },
    subYear: function(years) {
      this.age -= years;
    },
    updateCoor: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },

  computed: {
      getAB: function() {
        return this.a + this.b;
      }
  }
});
