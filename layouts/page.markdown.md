# {{ .Title }}
{{ with .Params.updated }}
Updated {{ (time .).Format "January 2, 2006" }}
{{ end }}
{{ .RawContent }}
