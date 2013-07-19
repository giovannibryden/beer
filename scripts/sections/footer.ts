$("./body") {
  insert_bottom("footer", class: "_footer") {
  	move_here("//h3[ancestor::div[contains(@class,'secondaryContent')]]") {
  		add_class("_title")
  	}
  	move_here("//div[contains(@class,'secondaryContent')][ancestor::aside][child::div[contains(@class,'tweet')]]") {
  		add_class("_socialButtons")
  	}
  	move_here("//div[contains(@class,'footer')]") 
  	move_here("//div[contains(@class,'footerLegal')]")
  }
}
