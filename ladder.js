let ladder = {
  step: 0,
  up() {
    step = this.step++;
    return this;
  },
  down() {
    step = this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0