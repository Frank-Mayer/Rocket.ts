String.prototype.hash = function (allowNegative = false) {
  var hash = 0;
  if (this.length == 0) {
    return hash;
  }
  for (var i = 0; i < this.length; i++) {
    var char = this.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  if (allowNegative) {
    return hash;
  } else {
    return hash + 0x80000000;
  }
};
