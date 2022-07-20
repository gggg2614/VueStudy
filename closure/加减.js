var MakeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    }
  }
};

var Counter1 = MakeCounter()
var Counter2 = MakeCounter()

Counter1.increment()
console.log(Counter1.value());

Counter2.decrement()
console.log(Counter2.value());