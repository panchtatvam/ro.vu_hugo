TEST PASSION INDEX MD



{{ $sections := (.Site.GetPage "section" .Section).Sections }}

{{ range $sections }}
{{ .Title }} <!-- or whatever -->
{{ end }}