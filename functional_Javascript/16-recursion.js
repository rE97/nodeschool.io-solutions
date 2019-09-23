function getDependencies(tree, result, printTree) {

	result = result || []
	let dependencies = tree && tree.dependencies || []			// if tree.dependencies exists, assign the value to dependencies, if tree.dependencies doesn't exists, assign tree value to dependencies, otherwise assign empty array as value (see comment at the bottom)
	Object.keys(dependencies).forEach((dep) => {
		let key = dep + '@' + tree.dependencies[dep].version
		if (result.indexOf(key) === -1) {
			result.push(key);
		}
		getDependencies(tree.dependencies[dep], result)
	})

	return result.sort()
}

module.exports = getDependencies;

// let dependencies = tree && tree.dependencies || []
// is the same as
// if (tree.dependencies) {
// 	dependencies = tree.dependencies
// } else if (tree) {
// 	dependencies = tree
// } else {
// 	dependencies = []
// }