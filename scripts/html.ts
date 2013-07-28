# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()

  remove("//iframe")

  add_assets()
  remove_all_styles()
  remove_external_styles()
  remove_internal_styles()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts
}

