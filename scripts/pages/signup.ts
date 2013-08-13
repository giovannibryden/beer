$("/html/body") {
  add_class("pages_signup")

  # add your page-specific transformations here
  $("//div[contains(@class,'breadBox')]") {
    remove()
  }
}
