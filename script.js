let projectsToggled = false
let contactsToggled = false
let coffeeToggled = false

function displayProjects() {
  if (projectsToggled == false) {
    document.getElementById("projectspart").innerHTML = '<h3>Duck Coin (soon to come)</h3><p>Duck Coin (DKC) is the first cryptocurrency that is not based on the blockchain and on GPU mining. Instead, it is based on CPU mining. It is way easier to mine and needs less energy. It\'s still being developed though, so you can\'t download the Duck Coin Client yet (but you\'ll soon to be able to!)</p><h3><a href="https://shitter.ch" target="_blank" rel="noopener noreferrer">Shitter.ch</a></h3><p>Shitter.ch is a free, <a href="https://github.com/gugu256/shitter" target="_blank" rel="noopener noreferrer">open-source</a> and anonymous social media created by my and canard. It was originally created as a joke mocking twitter, but it is now a more <i>serious</i> project.</p><h3>United Qtubers Association</h3><p>U.Q.A. is my musical artist name! By the way, I just realeased a new EP called "Schlö".<a href="https://open.spotify.com/artist/7Hs34IxB6oLLJXhTtccOTv" target="_blank" rel="noopener noreferrer">You can listen to it <u>here.</u></a></p><h3><a href="https://londonian-translator.pancakedev.repl.co" target="_blank" rel="noopener noreferrer">London Accent Translator</a></h3><p>The concept of this website is simple : input normal english, press the button, and you\'ll get a Londonized version of your text!</p><h3><a href="https://organization.thedukk.repl.co" target="_blank" rel="noopener noreferrer">Duck Organization</a></h3><p>The Duck Organization is a series of mini-projects about DUCKS including :<br><u>Worship the Duck</u> : a website where you pretty worship a duck a get higher up in the duck clergy<br><u>Stroke the Duck</u> : a website where you pet/stroke a duck<br><u>Bouncy Duck</u> (formally known as StuDuck) : a website where you can admire a duck bouncing. But you can also start a session of a set number of bounces. When you start a session bounces are reset to 0, Lo-Fi music starts playing in the background and you can start working/studying. At the end of your session, I recommend going on <a href="https://shitter.ch" target="_blank" rel="noopener noreferrer">shitter.ch</a> and writing a post flexing about the length of your working/studying session and the number of times the duck bounced during it<br><u>Feed the Duck</u> : a website your feed a duck and see it grow bigger and bigger</p><h3><a href="https://angugames.itch.io" target="_blank" rel="noopener noreferrer">My itch.io</a></h3><p>I make games sometimes (or at least I used to)</p>'
    document.getElementById("arrowprojects").innerHTML = "▾"
    projectsToggled = true
  } else {
    document.getElementById("projectspart").innerHTML = ""
    document.getElementById("arrowprojects").innerHTML = "▸"
    projectsToggled = false
  }
}

function displayContacts() {
  if (contactsToggled == false) {
    document.getElementById("contactspart").innerHTML = '<p>You can talk to me on discord by joining my <u><a href="https://discord.gg/7Xhu2GZw5f" target="_blank" rel="noopener noreferrer">discord server!</a></u> (this also THE place to go if you want to hire me!)</p>'
    document.getElementById("arrowcontacts").innerHTML = "▾"
    contactsToggled = true
  } else {
    document.getElementById("contactspart").innerHTML = ""
    document.getElementById("arrowcontacts").innerHTML = "▸"
    contactsToggled = false
  }
}

function displayCoffee() {
  if (coffeeToggled == false) {
    document.getElementById("coffeepart").innerHTML = '<p>You can donate to me through <a target="_blank" href="https://www.buymeacoffee.com/krayse/"><u>buymeacoffee.com!</u></a></p> <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="krayse" data-color="#7c3238" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> <p>You don\'t like this way of donating? No problem! You can give me money through Bitcoin and Ethereum.<br>Here are my wallet addresses : <br>BTC : 3EEDXwPmCv7t39mDBtJ6B5bsRrAyiCXrsz<br>ETH : 0x106Affaf92D82B9778AdB85e8E041768F3B19Fa6</p>'
    document.getElementById("arrowcoffee").innerHTML = "▾"
    coffeeToggled = true
  } else {
    document.getElementById("coffeepart").innerHTML = ""
    document.getElementById("arrowcoffee").innerHTML = "▸"
    coffeeToggled = false
  }
}