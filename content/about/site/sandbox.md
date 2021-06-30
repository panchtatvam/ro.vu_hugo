---
title: Sandbox
tags: [meta]
---

## Cross links

### Show the path
{{< ref "communication" >}}

### Create a link
- [Communication]({{< ref "communication" >}} "communication")


### Display all tags

{{range $name, $taxonomy := .Site.Taxonomies.tags}} {{ $cnt := .Count }}
  {{ with $.Site.GetPage (printf "/tags/%s" $name) }}
         <div class="tagbutton">
	<a href={{ .RelPermalink }} title="All pages with tag <i>{{$name}}</i>">{{$name}}</a>
	<sup>{{$cnt}}</sup>
         </div>
  {{end}}
{{end}}