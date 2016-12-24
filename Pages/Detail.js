var Context = require("Modules/Context");

var title = Context.item.map(function(x) {
	return x.title
})

var id = Context.item.map(function(x) {
	return x.id
})

var publicationdate = Context.item.map(function(x) {
	return x.publicationdate
})

var author = Context.item.map(function(x) {
	return x.author
})

var picture = Context.item.map(function(x) {
	return x.picture
})

var authorbio = Context.item.map(function(x) {
	return x.authorbio
})

var cost = Context.item.map(function(x) {
	return "Price : $"+x.cost
})

var introduction = Context.item.map(function(x) {
	return x.introduction
})

var price = Context.item.map(function(x) {
	return x.cost
})

function addToCart() {
	Context.addToCart(id.value, price.value, title.value, picture.value, author.value)
	router.goto("home")
}

module.exports = {
	title,
	cost,
	authorbio,
	author,
	introduction,
	picture,
	publicationdate,
	addToCart,
	price
}
