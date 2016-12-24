var Context = require("Modules/Context")
var Observable = require("FuseJS/Observable")

var username = Observable()
var password = Observable()
var err = Observable()

function login() {
	Context.login(username.value, password.value).
    then(function(response) {
    Context.user.value = response.username
    Context.isLoggedIn.value = true
    router.goto("home")
    username.value = ""
    password.value = ""
    err.value = ""
  })
}

module.exports = {
	login,
	username,
	password
}