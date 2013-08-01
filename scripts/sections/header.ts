$('./body') {
  insert_top("header", class: "_header") {
  	move_here("//div[@id='header']/div[@id='logoBlock']//div[@id='logo']") {
  		wrap("div", class:"_logo")

      # Remove inline styles on logo pic
      $("./a/img") {
        remove("@width")
        remove("@height")
        remove("@border")
      }
  	}

  	move_here("../div[@id='loginBar']") {
  		wrap("div", class:"_login")
  	}

  	move_here("//div[@id='navigation']") {
  		wrap("div", class:"_navigation")

      # Make items into togglers.
      $(".//nav/div/ul/li[contains(@class,'selected')]") {
        attributes(data-ur-set:"toggler")

        # Wrap <a> in div, make into a button
        $("./a[contains(@class,'navLink')]") {

          wrap("div", class:"_button") {
          attributes(data-ur-toggler-component:"button")
          }
        }

        # Mark up toggled content
        $("./div[contains(@class,'tabLinks')]") {
          attributes(data-ur-toggler-component:"content")
        }

      }
  	}
  	move_here("//div[@id='searchBar']") {
  		wrap("div", class:"_search")
    }
  }

  # Remove all in-line bullshit
  remove("@bgcolor")
  remove("@text")
  remove("@link")
  remove("@vlink")
  remove("@alink")
  remove("@data-twttr-rendered")
}
