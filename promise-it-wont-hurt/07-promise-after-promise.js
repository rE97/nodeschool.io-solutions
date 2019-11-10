'use strict';

first()
.then((firstResponse) => second(firstResponse))
.then((secondResponse) => console.log(secondResponse));