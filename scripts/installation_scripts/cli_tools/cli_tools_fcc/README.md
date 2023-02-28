# CLI Tools for Workflow
## (A FreeCodeCamp Suggestion)[https://www.freecodecamp.org/news/improve-your-workflow-with-these-awesome-cli-tools-fc3750cbb2bf/]

### Description:
Creating this install script based upon the CLI Tools recommended from an article that I came across on freeCodeCamp.com. 

#### Task Management & Planning

##### Task Warrior
Manages TODO list from the command line. 

Link -> [TaskWarrior](https://taskwarrior.org/)
Docs LInk -> [TaskWarrior](https://taskwarrior.org/docs/start/)

Install via, 
'''bash
sudo pacman -S task taskwarrior-tui
'''

##### Thyme
A console Pomodoro Timer, which helps one utilize the Pomodoro Technique. 

Link -> [Thyme](https://github.com/hughbien/thyme)

Install via, 
'''bash 
wget -O thyme https://github.com/hughbien/thyme/releases/download/v0.1.4/thyme-linux-amd64
'''

or from source
'''bash
git clone https://github.com/hughbien/thyme.git
cd thyme
make
make install
'''

##### Moro
A command line tool for tracking work hours.

Link -> [Moro](https://moro.js.org/)

Install via, 
'''npm 
npm install -g moro
'''

or 

'''yarn
yarn global add  moro
'''

#### Development 

##### Wuzz 
An interactive cli tool for HTTP inspection

Link -> [Wuzz](https://github.com/asciimoo/wuzz)

Install via, 
'''go 
 go get github.com/asciimoo/wuzz
'''
and then,
'''bash
"$GOPATH/bin/wuzz" --help
'''

##### FX
A CLI tool for JSON processing and viewing. 

Link -> [FX](https://github.com/antonmedv/fx)

Install via, 
'''snap 
snap install fx
'''

or

'''bash
pacman -S fx
'''

##### Serve
A file serving utility CLI tool. 

Link -> [serve](https://github.com/vercel/serve)

Install via, 
'''npm 
npm install --global serve
'''

##### howdoi
A CLI tool that allows one to read StackOverFlow articles and posts. 

Link -> [howdoi](https://github.com/gleitz/howdoi)

Install via, 
'''python 
pip install howdoi
'''

##### gitstats
A CLI application that fetches statistics from Github. 

Link -> [gitstats](https://github.com/IonicaBizau/git-stats)

Install via, 
'''node
npm i -g git-stats
'''

or 

'''bash 
curl -s https://raw.githubusercontent.com/IonicaBizau/git-stats/master/scripts/init-git-post-commit | bash
'''

##### devstats
A CLI application that fetches statistics from "developer sites" like StackOverFlow, WakaTime, and Github and displays them nicely. 

Link -> [devstats](https://github.com/shroudedcode/devstats)

Install via, 
'''yarn
yarn global add devstats
'''

or 

'''node 
npm install -g devstats
'''

##### Asciinema
A CLI Application that is a terminal recorder.

Link -> [Asciinema](https://asciinema.org/)

Install via, 
'''bash 
pacman -S asciinema
'''

##### Terminalizer
A CLI Application that is a terminal recorder. 

Link -> [Terminalizer](https://github.com/faressoft/terminalizer)
Install via, 

'''node 
npm install -g terminalizer

'''

#### Fun
CLI Applications for fun

##### Bash2048
Play 2048 in the CLI. 

Install via, 

'''bash
bash <(curl -s https://raw.githubusercontent.com/mydzor/bash2048/master/bash2048.sh
'''

##### TextMeme
Generate good looking text memes like the one in 
the link below.

Link -> [TextMeme](https://www.freecodecamp.org/news/improve-your-workflow-with-these-awesome-cli-tools-fc3750cbb2bf/)
Github Link -> [TextMeme](https://github.com/beatfreaker/text-meme-cli)

Install via, 

'''node 
npm install -g text-meme-cli
'''

##### CLI Typer
Practice Typing with this CLI tool. 

Github Link -> [CLI Typer](https://github.com/balzss/cli-typer)

Install via, 

'''node 
npm install -g balzss/cli-typer
'''
or 

'''bash
git clone https://github.com/balzss/cli-typer.git
cd cli-typer
npm install -g . <-- (Optional)
node app.js
'''

#### Miscellaneous
Miscellaneous CLI Tools 

##### Speed Test
A CLI tool that shows the speed rating and test for the ISP connection. 

Link -> [SpeedTest](https://github.com/sindresorhus/speed-test)

Install via, 
'''bash 
npm install --global speed-test 
'''

##### Overtime-cli
A CLI tool that shows time-overlap tables for remote teams.

Link -> [Overtime-CLI](https://github.com/diit/overtime-cli)

Install via, 

'''bash
npm install -g overtime-cli
'''

