# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  add_assets()
  remove_all_styles()
  remove_external_styles()
  remove_internal_styles()

  @import mappings.ts

  @import sections/header.ts
  @import sections/footer.ts



  # Make the web view play nice with my device
  $("./head") {
  	insert("meta", name:"viewport", content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")
  }
}

