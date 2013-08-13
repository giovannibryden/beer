$("./body") {

  insert_top("div", class: "_contact") {
    move_here("//div[@class='titleBar']")
    move_here("//label[@id='SignupButton']") {
      add_class("signup_button")
    }
  	move_here("//div[@id='baContent']") {
      insert_top("br")
      remove("//@width")
  		remove("//@height")
			remove("//@border")
    }
    $("//div[@id='baSidebar']") {
      $(".//div[@class='secondaryContent']") {
        move_to("//div[@class='_contact']", position("bottom"))
      }
		}
    $(".//a[contains(@href,'mailto')]") {
      add_class("mailto")
    }
    $(".//a[contains(@href,'advertise')]") {
      add_class("mailto")
    }
  }
  $("//div[@id='content']")	{	
    remove(".//fieldset")
  }
  insert("br")
  remove("//iframe[contains(@src,'docs.google')]")
}