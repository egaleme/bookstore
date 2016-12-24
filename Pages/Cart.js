var Context = require("Modules/Context")
var Observable = require("FuseJS/Observable")

var cart = Context.cart.map(function(x) {
	x.handler = function() {
		
	}
	return x;
})
function checkout() {
	router.push("purchases")
}

function remove(args) {
	var book = args.data
	Context.removeFromCart(book)
}
module.exports = {
	cartItems: cart,
	noItems: Context.emptyCart,
	checkout: checkout,
	remove: remove
}
