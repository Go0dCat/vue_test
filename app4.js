new Vue({
  el: '#vue-app',
  data: {
    gameOver: false,
    wonGame: false,
    isXTurn: true,
    values: [
      [{value: '_'}, {value: '_'}, {value: '_'}],
      [{value: '_'}, {value: '_'}, {value: '_'}],
      [{value: '_'}, {value: '_'}, {value: '_'}],
    ]

  },
  methods: {
    getStuff: function() {
      console.log(this.values[0][0].value);
    },
    restartGame: function() {
      this.values.forEach((item, i) => {
        item.forEach((item, i) => {
          item.value = '_';
        });
      });
      this.isXTurn = true;
      this.gameOver = false;
      this.wonGame = false;
    },
    enterValue: function(x, y) {
      var key = '';
      if(this.isXTurn) {
        key = 'x';
      } else {
        key = 'o';
      }
      //TODO add check for if button already is assigned
      this.values[x][y].value = key;
      this.isXTurn = !this.isXTurn;

    }

  },

  computed: {
      checkIfWon: function() {
        //TODO You need to write this yourself!
      },


  }
});
