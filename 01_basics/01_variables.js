const accountId = 144533;
let accountEmail = "hitesh@google.com"
let accountPassword = "12345"
accountCity = "karachi"

// accountId = 2;

accountEmail = "qutub@google.com"
accountPassword = "909090"
accountCity = "lahore"

/* 
    Prefer not to use var keyword
    bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])