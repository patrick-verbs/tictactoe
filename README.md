# <a name="TicTacToe"></a>Tic-Tac-Toe
#### by Maxwell Meyer & Patrick Lee | _[See this project on GitHub Pages](https://patrick-verbs.github.io/tictactoe)_ _(...when it's live)_

## __If you're an Epicodus student__ (or anyone else!) you're free to use this README as a template for your own work :)
<details><summary><strong>Contents</strong></summary>
<ul>
  <li><a href="#About">About</a></li>
  <ul>
    <li><a href="#Description">Description</a></li>
    <li><a href="#Install">Installation & Setup</a></li>
    <li><a href="#Technologies">Technologies Used</a></li>
    <li><a href="#Bugs">Known Bugs</a></li>
    <li><a href="#Specs">Test Specs</a></li>
  </ul>
  <li><a href="#License">License</a></li>
  <li><a href="#Contact">Contact</a></li>
</ul>
</details>

# <a name="About"></a>About
###### _[TicTacToe](https://github.com/patrick-verbs/tictactoe) > About_
This tic-tac-toe project was created as an assignment to learn object-oriented JavaScript practices using prototypes and constructs.

## <a name="Description"></a>Description
###### _[TicTacToe](https://github.com/patrick-verbs/tictactoe) > [About](#About) > Description_
Forthcoming :P

## <a name="Install"></a>Installation & Setup
###### _[TicTacToe](https://github.com/patrick-verbs/tictactoe) > [About](#About) > Installation & Setup_
Also forthcoming...

## <a name="Technologies"></a>Technologies Used
###### _[TicTacToe](https://github.com/patrick-verbs/tictactoe) > [About](#About) > Technologies Used_
- __HTML5__
- __JavaScript__ with __[jQuery v. 3.6.0](https://jquery.com/)__
- __CSS3__ with __[Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)__

## <a name="Bugs"></a>Known Bugs
###### _[TicTacToe](https://github.com/patrick-verbs/tictactoe) > [About](#About) > Known Bugs_
:0

## <a name="Specs"></a>Test Specs
###### _[TicTacToe](https://github.com/patrick-verbs/tictactoe) > [About](#About) > Specs_
### Passing


---
### Failing/Untested
| _Describe:_            | _new Board()_ |
|------------------------|--------------|
| __Test:__              | It should create object, which contains an array of 9 empty strings, representing the 9 empty squares at the start of a game. |
| __Code:__              | ```const newGame = new Board();```<br>```newGame.spaces;``` |
| __Expected Output:__   | ```[, , , , , , , , ]``` |


| _Describe:_            | _Board.prototype.addMark_ |
|------------------------|--------------|
| __Test:__              | It should add an "X" character to the ```spaces``` property (an array) at the specified index in that array.  |
| __Code:__              | ```const newGame = new Board();```<br>```let playerMark = "X";```<br>```let targetSpace = 4;```<br>```newGame.addMark(playerMark, targetSpace);```<br>```console.log(newGame.spaces) |
| __Expected Output:__   | ```[, , , "X", , , , , ]``` |



---
### Template
| _Describe:_            | _testTemplate()_ |
|------------------------|--------------|
| __Test:__              | It should do the thing! |
| __Code:__              | ```testTemplate("Do the thing!");``` |
| __Expected Output:__   | ```"So here's the thing..."``` |
|                        ||
|                        ||
|                        ||
| __Test:__              | It should also do this other thing... |
| __Code:__              | ```testTemplate("Another!");``` |
| __Expected Output:__   | ```"And another thing!"``` |

# <a name="License"></a>License
###### _[TicTacToe](https://github.com/patrick-verbs/tictactoe) > License_
<details>
<summary><a href="https://opensource.org/licenses/MIT"><strong>MIT</strong></a></summary>
<pre>
MIT License

Copyright (c) 2021 Maxwell Meyer and Patrick Lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</pre>
</details>

Copyright © 2021 Maxwell Meyer and Patrick Lee

# <a name="Contact"></a>Contact
###### _[TicTacToe](https://github.com/patrick-verbs/tictactoe) > Contact_
#### Patrick Lee | patricklee1138[at]live[dot]com