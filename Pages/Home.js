var Context = require("Modules/Context")
var Observable = require("FuseJS/Observable")

function detail(args) {
	Context.item.value = args.data
	router.push("detail")
}

module.exports = {
	books: Context.books,
	detail: detail
}