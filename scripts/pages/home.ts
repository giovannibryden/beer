$("//div[@id='baContent']/ancestor::fieldset") {
	add_class("_hide")
}
$("./body") {
  # Remove log in button. Already have one in the menu so...whatever.

 remove("//div[contains(@class,'loginButton')]")
  insert_top("div", class: "_home") {
  		move_here("//div[@id='baContent']/div/a[@href='/mag/']") {
  			remove("//@width")
  			remove("//@height")
  			remove("//@border")
  			$("./img") {
  				add_class("_heroImage")
  			}
  		}
  }

}