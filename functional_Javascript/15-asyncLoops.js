function loadUsers(userIds, load, done) {
	let users = [];
	let completed = 0;

	userIds.forEach((id, index) => {
		load(id, function(user) {
			users[index] = user;
			if (++completed >= userIds.length) return users
		})
	})
}

module.exports = loadUsers;