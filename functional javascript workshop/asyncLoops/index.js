function loadUsers(userIds, load, done) {
	let users = [];
	let completed = 0;
	userIds.forEach((id, index) => {
		load((id, user) => {	// load will be invoked with user ids
			users[index] = user; // put user to correct index position, based on userIds index
			if (++completed >= userIds.length) { // increase complete value, and check if true then return the value
				return done(users);
			}
		});
	});
}

module.exports = loadUsers;