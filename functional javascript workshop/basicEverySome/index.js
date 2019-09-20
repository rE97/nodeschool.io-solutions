function checkUserValid(goodUsers) {
	return function allUserValid(submittedUsers) {
		return submittedUsers.every(submittedUser => {
			return goodUsers.some(goodUser => {
				return goodUser.id === submittedUser.id;
			});
		});
	};
}

module.exports = checkUserValid;