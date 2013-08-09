$("./body") {

  # Get image source from piece of shit iframe banner I can't resize
  remove("//iframe[@name='503f8b354f98f']/ancestor::div[@id='logoBlock']")

  insert_bottom("footer", class: "_footer") {
    # I apologize in advance for this selector
    move_here("..//aside/div[contains(@class,'sidebar')]/div[contains(@class,'sharePage')][1]")
    move_here("../footer/div[contains(@class,'footer')]")

    # # Add shameless plug about how I built this
    # insert("div") {
    #   text() {
    #     set("Built by G. Bryden")
    #   }
    # }
  }
}