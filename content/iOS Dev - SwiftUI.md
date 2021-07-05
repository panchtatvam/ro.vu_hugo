### Delay
https://www.hackingwithswift.com/example-code/system/how-to-run-code-after-a-delay-using-asyncafter-and-perform
```
DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
    // your code here
}
```


@Binding, @State, @ObservableObject
https://jaredsinclair.com/2020/05/07/swiftui-cheat-sheet.html
https://www.hackingwithswift.com/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject


## Example Swift projects
https://github.com/Dimillian/MovieSwiftUI
https://github.com/Ranchero-Software/NetNewsWire



Play while muted
https://stackoverflow.com/questions/51010390/avaudiosession-setcategory-swift-4-2-ios-12-play-sound-on-silent
```
do {
	try AVAudioSession.sharedInstance().setCategory(.playback, mode: .default)
	try AVAudioSession.sharedInstance().setActive(true)
} catch {
	print(error)
}
```





## Persist Local Data

USerDefaults - key value dictionary; 
Keychain - pw, credentials, userids, secure stuff (key value)
CoreData - database, queries, etc. Can ship a fullly filled database

Android: Jetpack Compose


https://developer.apple.com/design/human-interface-guidelines/ios/controls/pull-down-menus/ (just ios 14)

In Simulator, hold down Option for 2-finger gestures; Hold down Option+Shift for 2 finger swipe

Apple tends to use "is..Presented"

Settings > Accessibility >  Display & TExt size > Largessibility Sizes (X) > Make text size large



Accessibility Inspector
Lets you explore items running in sumulartor


Property observers
Run code when something is set
https://www.hackingwithswift.com/read/8/5/property-observers-didset
```
var lesson: Lesson? {
        didSet {
            print("Lesson: ", lesson ?? "None")
        }
    }
```

Functions should read as sentences (e.g. Play Audio ForLesson...)

External parameter vs local parameter name
https://useyourloaf.com/blog/swift-named-parameters/
```
private func playAudio(forLesson lesson: Lesson) {
        self.audioplayer.play(audioResource: lesson.audioResource)
    }
```

`$` converts @State to @Binding

if you private struct within a view, dont have direct access to the parent properties; must used @Binding
if using functions, have access to the vars


Background color for a VStack or HStack
        .background(Color.gray)

If you have more than one view, be explicit about putting it in vstack, hstack or group

https://www.hackingwithswift.com/quick-start/swiftui/how-to-preview-your-layout-in-different-devices

NavigationView
* Move into the safe area (away from Status bar / notch & Home indicator)


google everything with "hacking with swift"

## Error handling
https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html

## If let
If the right hand expression returns a non-optional, then execute the if statement. If the expression returns nil, then run the else

Using Protocol as an EnvironmenObect (ObservedObject)
https://stackoverflow.com/questions/59503399/how-to-define-a-protocol-as-a-type-for-a-observedobject-property

Generics
https://docs.swift.org/swift-book/LanguageGuide/Generics.html

Options > Text Editing > Editing > While Editing > [X] Including whitespace-only lines (trims new lines)

cant have an onbservable object for a protocol

Show Editor Only: CMD+Enter
Open up Preview pane:  CMD+option+Enter
OPen Preferences: CMD+,


Ordering 
	public injjcted properties
	public self creted properties
	body
	private variables
	private functions



iOS controls
https://developer.apple.com/design/human-interface-guidelines/ios/controls/buttons/

### REPL
`swift`
`:help`
`:quit`

### JSON
decoding : from string to object

```
import Foundation

struct Lesson: Decodable {
    let name: String
    let index: Int
}

let json =
"""
{
  "name": "Lesson 1",
  "index": 1
}
"""

let data = json.data(using: .utf8)!

let decoder = JSONDecoder()
let lesson = try! decoder.decode(Lesson.self, from: data)



```

Multiple objects
```
let lessons = try! decoder.decode([Lesson].self, from: data)

```



### Try
Force `try!`  - let error propagate all the way up to AppDelegate, can then crash the whole app

### Protocols
gotta implement method to conform to it
can add functionality
Can add methods but not properties (variables)



### Audio
https://www.hackingwithswift.com/example-code/media/how-to-play-sounds-using-avaudioplayer




How to easily wrap a function/block araound another without counting { }?

### Nil Coelescing Operator (`??`)
If left is nil, then return right side 
```
Text(lesson.phrase.pronunciation ?? "None").font(.title)
```

```
func nilTesting() {
    let optionalString: String? = nil
    print(optionalString ?? "(empty)") // (empty)
    
    let optionalString2: String? = "foo"
    print(optionalString2 ?? "(empty)") // foo
    
    let optionalBool: Bool? = nil
    print(optionalBool ?? false) // false
    print((optionalBool ?? false) || true) // true
    
    let somethingElse = true
    if (optionalBool ?? false) || somethingElse {
        print("true")
    }
}

```

### Optional Unwrapping
```

func optionalUnwrapping() {
    let optionalString: String? = "foo"
    let optionalString2: String? = nil
    
    print(optionalString!) // force unwrapping, crashes if nil
    if let string = optionalString { // if let unwrapping
        print(string)
    } else {
        // optionalString is nil
    }
    
    // using guard to unwrap optionals
    guard let string = optionalString,
        let string2 = optionalString2,
        2 > 1
        else { return }
    print(string) // type String, not optional
    print(string2) // type String, not optional
    
    // nested unwrapping with guard
    let optionalLesson: Lesson? = nil
    guard let lesson = optionalLesson,
        let pronunciation = lesson.phrase.pronunciation
        else { return }
    print(pronunciation)
    
    // nested if let unwrapping = pyramid of doom
    if let lesson = optionalLesson {
        if let pronunciation = lesson.phrase.pronunciation {
            print(pronunciation)
        }
    }
}
```


### For each, shorthand parameters
```
func foo() {
    let strings = ["One", "Two", "Three"]
    
    // More modern way
    strings.forEach { string in
        print(string)
    }
    
    // C-style way
    for string in strings {
        print(string)
    }
    
    // Example mapping to a constant (modern way of doing this)
    let mapFoo = strings.map { string in
        "awesome \(string)"
    }
    print(mapFoo)
   
    // Best version - shorthand parameter name
    let mapFoo2 = strings.map { "awesome \($0)" }
    print(mapFoo2)
    
    // Appending with foreach (not preferred)
    var forEachFoo = [String]()
    strings.forEach { string in
        forEachFoo.append("awesome \(string)")
    }
    
    let _ = strings.sorted { (lhs, rhs) -> Bool in
        lhs < rhs
    }
    let _ = strings.sorted { $0 < $1 }
}

```


### Enum
```
enum Fan {
    case small
    case medium
    case large
}

func fan(_ fan: Fan) {
    
}

func main() {
    printMyName(name: "Joe")
    printMyNameAgain("Joe")
    printMyNameAThirdTime(paramName: "Joe")
    
    fan(Fan.small)
    fan(.medium)
}

```

### Named Parameters
```
// Named parameter
func printMyName(name: String) {
    print(name)
}

// Implicit parameter
func printMyNameAgain(_ name: String) {
    print(name)
}

// Renamaed parameter
func printMyNameAThirdTime(paramName name: String) {
    print(name)
}
```



### Alerts
Example:
```
NavigationView {
...
}.alert(isPresented: $isAlertPresented) {
            Alert(title: Text("Alert me"))
        }
		
```

### Debugging
* Set a breakpoint - single click line gutter
* Check out the debug area, see variables
* `lldb` is the console, can do stuff like:
	* `po self.whatever` and it'll print out


### Modifiers
* Order matters in modifiers (.padding, .font, .background etc)
```
Text("Hello, Bob!")
                    .font(.title)
                    .foregroundColor(.blue)
                    .background(Color.black)
                    .padding()
```


### NavigationLinks
https://www.hackingwithswift.com/books/ios-swiftui/pushing-new-views-onto-the-stack-using-navigationlink

### NavigationView
* Makes sure stays in safe area
```
struct ContentView: View {
    @State var isCool: Bool = true
    @State var isAlertPresented: Bool = false
    
    var body: some View {
        NavigationView {
            VStack {...
```



Scheme: Different buildr/run configs

Folder Org
* App
	* Framework - app delegate, scene delegate
	* Helpers - extensions on existing classes (e.g. colors, fonts)
	* Models
	* Resources - assets directory, icons, appstore logo. Not configuration, not code
		* HTML,e tc
	* Supporting Fiels
		* info.plist, fonts, 
	* UIKit
		* no i
	* Views
* Frameworks )manged)
* Pods (managed)
* Products )(not usred)
* Tests


no idea of webview in swiftUI yet

### Property Decorators
#### @State 
When a variable is decorated with this, and it changes, redraw body
when try to change, creates to new struct to replace
    @State var isCool: Bool = true
$varname = bind to this variable

```
struct ContentView: View {
    @State var isCool: Bool = true
    @State var isAlertPresented: Bool = false
```


### Sheets
* sheets - modal (like iMessage > new msg)

### Structs
struct cannot be modified (static)

### Toggles
How to create a toggle
* https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-toggle-switch

`@State var isCool: Bool = true`
`Toggle(isOn: $isCool)`
`Text("Are we cool? \(isCool ? "Yes" : "No")")`





### Misc SwiftUI Info

* SwiftUI requires iOS13+ & Catalina
* app delegate - launching point; application function
* didFinishLaunchingWithOptions
* UISceneConfiguration returns appdelegate.swift







[[iOS Dev - Xcode Keyboard Shortcuts]]







## XCode UI
* Autocomplate parameters. when its blue, start typing
	* Tab goes to next placeholder

### VCS
Blue in the gutter, uncommited changes
"M" next to the filename in Project Explorer = modified file, A for added





## Open Questions
* how to set variable in `lldb`?
* how to log to debug / levels?






## Links & Docs
### Project
* [Shared Google Drive project folder](https://drive.google.com/drive/folders/1swNr1OWGw4LQTA0KyVL_MLUt9VvKlvZ3)
* [Shared Google Drive project NOTES](https://docs.google.com/document/d/1DHDM5ZgdC4TqeJXJYvbebxsjrbHc5fjh5q8FQJSBTfk/edit)

### VCS
https://github.com/Helicer/ios-learning-app

### Tutorials
Hackingwithswift.com @twoStraws
* Tons of tutorials, super short
* "how to make my text colored"



