
### Extract audio from a movie
`ffmpeg -i infile.mkv outfile.mp3`


### Convert WAV to MP3
`ffmpeg -i infile.wav outfile.mp3`


### Extract subtitles from movie with ffmmpeg
https://superuser.com/questions/583393/how-to-extract-subtitle-from-video-using-ffmpeg

`ffmpeg -i Movie.mkv -map 0:s:0 subs.srt`

i: Input file URL/path.
-map: Designate one or more input streams as a source for the output file.
s:0: Select the subtitle stream.

his would download the first subtitle track. If there are several, use 0:s:1 to download the second one, 0:s:2 to download the third one, and so on

