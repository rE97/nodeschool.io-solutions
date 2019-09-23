// official solutions
function spy(target, method) {
	let originalMethod = target[method];	// pass by reference, so when target[method] is changed, originalMethod will not changed

	let tracker = {
		count: 0,
	}

	target[method] = function() {
		tracker.count++;
		return originalMethod.apply(this, arguments);
	}

	return tracker;
}

module.exports = spy;