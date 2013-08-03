$('./body') {
  insert_top("header", class: "_header") {
    attributes(data-ur-set:"toggler", data-ur-id:"menu")
  	move_here("//div[@id='header']/div[@id='logoBlock']//div[@id='logo']") {
  		wrap("div", class:"_logo") {
        # Place a button to toggle the whole nav.
        insert("a", href:"#", class:"box-shadow-menu", data-ur-toggler-component:"button", data-ur-id:"menu")
      }

      # Remove inline styles on logo pic
      $("./a/img") {
        remove("@width")
        remove("@height")
        remove("@border")
      }
  	}

  	move_here("../div[@id='loginBar']") {
      remove(".//h3")
  		wrap("div", class:"_login")
  	}

  	move_here("//div[@id='navigation']") {

      # Make li into buttons 
      $("./div[contains(@class,'pageContent')]/nav/div/ul/li") {
        add_class("_button")
      }
  		wrap("div", class:"_navigation") {
        attributes(data-ur-toggler-component:"content", data-ur-id:"menu")
      }

      # Make items into togglers.
      $(".//nav/div/ul/li[contains(@class,'selected')]") {
        attributes(data-ur-set:"toggler")

        # Wrap <a> in div, make into a button
        $("./a[contains(@class,'navLink')]") {

          wrap("div") {
          attributes(data-ur-toggler-component:"button", data-ur-id:"nav")
          }
        }

        # Mark up toggled content
        $("./div[contains(@class,'tabLinks')]") {
          attributes(data-ur-toggler-component:"content", data-ur-id:"nav")
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
