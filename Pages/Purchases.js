var Context = require("Modules/Context")
var Observable = require("FuseJS/Observable")

var todaysDate = "Purchases made on " + new Date().toDateString() + " at " + new Date().toLocaleTimeString()

function goBack() {
	router.goBack()
}
module.exports = {
	items: Context.cart,
	todaysDate,
	totalAmount: Context.totalAmount,
	qty: Context.cart.count(),
	goBack
}
