//parts on page
var dis = document.getElementById("display");
var body = document.getElementById("bod");
var heading1 = document.getElementById("heading");

//other vars



//functions
function start() {
    dis.style.fontSize = "29px";
    dis.innerHTML = "Loaded!";
    setTimeout(function(){
        body.style.backgroundColor = "#1111ff";
        dis.style.fontSize = 0;
        heading1.style.color = "#1111ff";
    }, 2000)
    setTimeout(function(){
        document.getElementById("g1").style.width = "650px";
        heading1.style.color = "white";
        heading1.style.fontSize = "45px";
        document.getElementById("g1").innerHTML = "<br class = 'gamebreak'><img src = 'media/ratios.1' width = '500px' height='500px' class='gameimage'>";
    }, 3000)
    setTimeout(function(){document.getElementById("g1").innerHTML = "<br class = 'gamebreak'><img src = 'media/ratios.1' width = '500px' height='500px' class='gameimage'><br class='gamebreak'><p class = 'gametitle'>Rates &#38; Ratios</p>"}, 3250)
    setTimeout(function(){document.getElementById("g1").innerHTML = "<br class = 'gamebreak'><img src = 'media/ratios.1' width = '500px' height='500px' class='gameimage'><br class='gamebreak'><p class = 'gametitle'>Rates &#38; Ratios</p><br><p class = 'gamedec'>Rates &#38; Ratios is a game where you (MathMan) needs to solve rates and ratios problems, like Miles Per Hour and/or words per minute.</p>"}, 3500)
    setTimeout(function(){document.getElementById("g1").innerHTML = `<br class = 'gamebreak'><img src = 'media/ratios.1' width = '500px' height='500px' class='gameimage'><br class='gamebreak'><p class = 'gametitle'>Rates &#38; Ratios</p><br><p class = 'gamedec'>Rates &#38; Ratios is a game where you (MathMan) needs to solve rates and ratios problems, like Miles Per Hour and/or words per minute.</p><br><a href = 'javascript:void(0)' title = 'Start the game :D' onclick='load("Ratios &#38; Rates", "games/ratesratios.html")'>Play now</a>`}, 4000)
}
//load the games
function load(dec, game){
    var myWindow = window.open("", "");
    myWindow.document.write(`<html><head><link rel = 'stylesheet' href = 'code/css/loadingpage.css' type = 'text/css'><link href = 'media/favicon-32x32.png' rel = 'icon' type = 'image/png'><title>Starting ` + dec + `...</title></head><body onload = 'loading()'><h1 id = 'head'>Preparing to launch ` + dec + `...</h1><br><p id = 'dis'><a>Click</a> <strong><a href = '` + game + `'>HERE</a></strong> <a>to</a> <a>play</a>.</p></body>`);
}