var Backend = require("./Backend");
var Observable = require("FuseJS/Observable");

var store = Observable();
var books = Observable();
var user = Observable();
var cart = Observable();
var isLoggedIn = Observable(false);
var item = Observable();
var cartItems = Observable();
var total = Observable(0);
var totalAmount = Observable();
var emptyCart = Observable(false)


function getBooks() {
	Backend.getBooks()
	.then(function(data) {
		store.replaceAll(data)
		store.forEach(function(book) {
			books.add(book);
		});
	})
	.catch(function(error) {
		console.log("can not load books :" + error)
	});
}

getBooks();

function login(username, password) {
	return Backend.login(username, password);
}

function addToCart(id, cost, title, picture, author) {
	total.value = 0
	cart.add({id: id, qty:1, cost: cost, title: title, picture: picture, author: author})
	cart.forEach(function(book) {
		total.value = (total.value + (book.cost * book.qty))
	})
	emptyCart.value = cart.length ? true : false
	totalAmount.value = "You Paid : $" + total.value.toFixed(2)
}


function removeFromCart(item) {
	total.value = 0
	cart.remove(item)
	cart.forEach(function(book) {
		total.value = (total.value + (book.cost * book.qty))
	})
	emptyCart.value = cart.length ? true : false
	totalAmount.value = "You Paid : $ " + total.value.toFixed(2)
}

module.exports = {
	books,
	user,
	cart,
	login,
	getBooks,
	isLoggedIn,
	item,
	cartItems,
	addToCart,
	emptyCart,
	removeFromCart,
	totalAmount
}
