function checkUserValid(goodUsers) {
	return function allUserValid(submittedUsers) {				// the next argument will get passed to this parameter
		return submittedUsers.every((submittedUser) => {		// every function will keep running until false value is found
			return goodUsers.some((goodUser) => {				// some function will keep running until true value is found
				return goodUser.id === submittedUser.id			// if false value is returned, meaning than some of the submittedUser is not in goodUser, then the preceding every function will get false value and then stop
			})
		})
	}
}

module.exports = checkUserValid

// detailed explanation for the above code

// first the set the goodUsers value using the following syntax
// var testAllValid = checkUsersValid(goodUsers) <-- this will get the returned allUserValid function in line 2

// then we test the submittedUsers
// testAllValid([
//   { id: 2 },
//   { id: 4 },
//   { id: 1 }
// ])

// the above testAllValid array argument is going to be paseed to allUserValid function as submittedUsers, not checkUserValid

// then we check every submittedUsers to goodUsers (every function will stopped if false value is found)
// then we check if some of the goodUsers is inside the submittedUsers (this function will keep running until true value is found), if nothing is found then false value is returned
// the value of goodUser some function is then returned to the earlier every submittedUsers, if false value is returned, then the function is stopped.