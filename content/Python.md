### How to turn a list into string

Take a list of strings or integers, make a string, separate by comma
```
list_of_ints = [80, 443, 8080, 8081]
combined_string = ', '.join(map(str, list_of_ints))
```

### Create safe filename from a string
https://stackoverflow.com/questions/7406102/create-sane-safe-filename-from-any-unsafe-string
```
"".join([c for c in filename if c.isalpha() or c.isdigit() or c==' ']).rstrip()

```
Example:
```
filename = u"ad\nbla'{-+\)(ç?"
```