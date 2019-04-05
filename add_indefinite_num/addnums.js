var add = function() {
  var argsArray = Array.prototype.slice.call(arguments);
  var total = 0;

  for (var i = 0; i < argsArray.length; i++) {
    total += argsArray[i];
  }

  return total;
};

module.exports = add;