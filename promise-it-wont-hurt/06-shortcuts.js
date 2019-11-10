'use strict';

var promise = Promise.reject(new Error('error'))

.catch(function(error) {
  console.log(error.message)
})