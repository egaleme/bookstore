var Context = require("Modules/Context")

function goLogin() {
	router.goto("login")
}

function goSignup() {

}

function goHome() {
	router.goto("home")
}

function logout() {
	Context.user.clear()
	Context.isLoggedIn.value = false
	Context.totalAmount.clear()
	Context.emptyCart.clear()
	Context.cart.clear()
	Context.item.clear()
	router.goto("home")
}

function goCart() {
	router.goto("cart")
}

function goPurchases() {
	router.goto("purchases")
}

module.exports = {
	isLoggedIn: Context.isLoggedIn,
	user: Context.user,
	goLogin: goLogin,
	logout: logout,
	goSignup: goSignup,
	goHome: goHome,
	goCart: goCart,
	goPurchases: goPurchases
}