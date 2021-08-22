---
title: "Youtube-dl"
---

File name too long
https://www.reddit.com/r/youtubedl/comments/ddj635/file_name_too_long_error/
```
youtube-dl  -o "%(id)s.%(ext)s"
```



Download video at best format, export as MP4, shorten the name
https://unix.stackexchange.com/questions/272868/download-only-format-mp4-on-youtube-dl/328536#328536
```
youtube-dl \
-f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4' \
-o "%(id)s.%(ext)s" \
url

```

Download JUST the audio
https://askubuntu.com/questions/423508/can-i-directly-download-audio-using-youtube-dl
```
youtube-dl -f 'bestaudio[ext=m4a]' url
```



automatically download in .m4v format
`youtube-dl -f m4a/mp4 URL`

Naming format
`-o "%(id)s.%(ext)s"`

```
youtube-dl <VID>
--merge-output-format mp4
-o "%(id)s.%(ext)s"
```

Using Youtube-dl on an iPad
[https://nonprofitworkflows.com/2020/11/25/using-youtube-dl-on-ipad/](https://nonprofitworkflows.com/2020/11/25/using-youtube-dl-on-ipad/)