function spy(target, method) {
	let tracker = { // <--- we need to use object so we can pass by reference, i.e. we can return tracker, but update count from this scope
		count: 0,
	}

	let originalMethod = target[method];

	// replace method with spy method
	target[method] = function() {
		tracker.count++; // <--- track if function was called
		return originalMethod.apply(this, arguments); // <--- invoke original function [ arguments value is the same as passing target, method as arguments, but it's shorter this way ]
	}

	return tracker;
}

module.exports = spy;