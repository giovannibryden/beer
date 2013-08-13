$("./body") {
	add_class("_beer")

	# Move product picture to top of page
	$("//div[@data-mw-id='mw_dump_tr1']/div") {
		remove("//@align")
		remove("//@valign")
	}
}