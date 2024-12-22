const accountId = 741904
let accountEmail = "rajeev@google.com"
var accountPassword = "091348970"
accountCity = "Uttarkhand"
let accountState;


// accountId = 2    // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "341798"
accountCity = "Delhi"

console.log(accountId);

/* 
  Perfer not to use var because of issue in block scope and funcitonal scope
 */
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
