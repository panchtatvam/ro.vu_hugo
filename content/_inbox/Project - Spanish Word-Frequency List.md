



## Dev - Get Started
* [[Routine - Start Work]]
* Open Chrome > Open up project bookmark folder links
  * Log into AWS 
  * Log into Github
* Open Terminal
  * Open project directory	
    * `cd ~/Development/text-to-speech_aws-polly` 
	* Open Finder to project directory here
		* `open .`
* Open PyCharm IDE
  * Open `tts.py`
* Test run : Chinese, normal mode
  * `./tts.py -f example_chinese.csv --foreign_voice Zhiyu --english_voice_engine neural -v`
* Test run: Spanish, normal mode
  * `./tts.py -f example_spanish.csv --foreign_voice Lupe --english_voice_engine neural --foreign_voice_engine neural -v`
* Test run (pyramid)
  * `./tts.py -f pyramid_chinese.csv --foreign_voice Zhiyu --english_voice_engine neural -v --mode pyramid`
* Organize layout




## Commands
Run Pyramid mode
`./tts.py -f pyramid_chinese.csv --foreign_voice Zhiyu --english_voice_engine neural -v --mode pyramid`

Normal mode, spanish, slow
`./tts.py -f spanish1.csv --foreign_voice Lupe \
--english_voice_engine neural \
--foreign_voice_engine neural \
--speed 80 -v`




## People
* [[Guzman, Isa]]
* [[Urbina, Camila]]
