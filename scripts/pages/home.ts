$("./body") {
  # Remove twitter iframe
  remove(".//div[@id='baSidebar']")
  
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
  # Move title bar where it belongs, below hero banner
  $(".//div[@id='content']//div[contains(@class,'titleBar')]") {
    move_to("//div[contains(@class,'_home')]")
  }
  # Move bacontent crap around
  $("//fieldset") {
    $("./div[@id='baContent']/div") {
      remove("./@style")
      


      # WHY DOES THIS BREAK THE FOOTER?

      # $(".//h6/parent::div") {
      #   remove("//@style")
      #   add_class("_heading")
      # }
      move_to("//div[contains(@class,'_home')]")
    }
  }
}