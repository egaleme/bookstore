var Context = require("Modules/Context")
var Observable = require("FuseJS/Observable")

function checkout() {
	router.push("purchases")
}

function clicked(args) {
	var b = args.data
	b.isRemoved.value = !b.isRemoved.value
}

function undo(args) {
	var b = args.data
	b.isRemoved.value = "false"
}

function remove(args) {
	var book = args.data
	Context.removeFromCart(book)
}
module.exports = {
	undo: undo,
	clicked: clicked,
	cartItems: Context.cart,
	noItems: Context.emptyCart,
	checkout: checkout,
	remove: remove
}
