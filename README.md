# What is it?

A dead simple handlebars helper that takes file name and inserts its contents (utf-8 encoding is used to read files).
Unlike `handlebars-inline`, it does not optimize SVG files.

# Usage

```
npm i handlebars-inline-file
```

In your handlebars template, write:

```handlebars
{{inline "filename.txt"}}
```

You can inline SVG or any other file containing tags, but do not forget that handlebars escapes HTML by default, so you need triple slashes:

```handlebars
{{{inline "filename.svg"}}}
```
