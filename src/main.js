var a = function(){console.log(this);console.log(this.prototype);this.prototype = {}; this.prototype.a = "a"};
var b = new a();
console.log(a.prototype);
console.log(b.prototype);