// function getDependencies(tree, result) {
// 	result = result || [];
// 	let dep;
// 	if (tree && tree.hasOwnProperty('dependencies')) {
// 		let dependencies = tree['dependencies'];
// 		for(let key in dependencies) {
// 			getDependencies(dependencies[key], result);
// 			dep = key + '@' + dependencies[key]['version'];
// 			if (result.indexOf(dep) === -1) {
// 				result.push(dep);
// 			}
// 		}
// 	}
// 	return result.sort();
// }

// official solutions
function getDependencies(mod, result) {
	result = result || []
	let dependencies = mod && mod.dependencies || []
	Object.keys(dependencies).forEach((dep) => {
		let key = dep + '@' + mod.dependencies[dep].version
		if (result.indexOf(key) === -1) {
			result.push(key);
		}
		getDependencies(mod.dependencies[dep], result)
	})
	return result.sort()
}

module.exports = getDependencies;