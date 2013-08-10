$("./body") {
	add_class("_search")
	$("//aside/div[contains(@class,'sidebar')]") {
		remove("./div[contains(@class,'loginButton')]")
	}
}	