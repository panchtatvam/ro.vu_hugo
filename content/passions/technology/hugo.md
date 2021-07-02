---
title: "Hugo"
tags: [technology]
---

## Cross-link pages
- https://gohugo.io/content-management/cross-references/

## Create a link to a page in markdown
- [Communication]({{< ref "communication" >}} "communication")
- [Communication]({{< ref "communication" >}})

## List nested directories
- https://discourse.gohugo.io/t/listing-nested-directories/7198/3

## Lists of content in templates
https://gohugo.io/templates/lists/

## Directory structure
https://gohugo.io/getting-started/directory-structure/





# Include images in post (WIP)
https://liatas.com/posts/escaping-hugo-shortcodes/
https://discourse.gohugo.io/t/page-bundle-image-references/10750
    <!-- Images --> 
    {{/* with .Resources.ByType "image" */}}
	<div class="Image">
	{{/* range . */}}
		<img src="{{/* .RelPermalink */}}">
	{{/* end */}}
	</div>

## Page resources
https://gohugo.io/content-management/page-resources/
https://www.regisphilibert.com/blog/2018/01/hugo-page-resources-and-how-to-use-them/

## Pagination
- https://gohugo.io/templates/pagination/

## Print a page's path
{{< ref "communication" >}}


## Publish site from iPad
- https://rullmann.ca/posts/2020-09-27-publishing-hugo-static-sites-from-your-ipad/


## Section page templates
- https://gohugo.io/templates/section-templates/

## Tags
- https://gohugo.io/templates/taxonomy-templates/


# Titles
- Use double-quotes on titles (YAML)


