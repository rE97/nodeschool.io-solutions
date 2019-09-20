function curryN(fn, n) {
  n = n || fn.length;

  function genCurry(prev) {
  	return function(arg) {
  		var args = prev.concat(arg);
  		if(args.length < n) return genCurry(args);
  		return fn.apply(this, args);

  		
  	}
  }

  return genCurry([]);


}


// official solution
// function curryN(fn, n) {
//   n = n || fn.length
//   return function curriedN(arg) {
//     if (n <= 1) return fn(arg)
//     return curryN(fn.bind(this, arg), n - 1)
//   }
// }

module.exports = curryN
