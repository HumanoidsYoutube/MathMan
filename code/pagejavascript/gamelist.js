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
        var input = document.createElement("INPUT");
        input.setAttribute("type", "text");
        input.setAttribute("value", "Search...");
        input.setAttribute("id", "search_input");
        input.setAttribute("class", "search");
        document.body.append(input)
        var button = document.createElement("BUTTON");
        button.setAttribute("onclick", "search()");
        button.setAttribute("id", "searchbuttton");
        button.setAttribute("class", "searchbutton")
        button.innerHTML = "Go";
        document.body.append(button)
    }, 3000)
}
//load the games
function load(dec, game){
    var myWindow = window.open("", "");
    myWindow.document.write(`<html><head><link rel = 'stylesheet' href = 'code/css/loadingpage.css' type = 'text/css'><link href = 'media/favicon-32x32.png' rel = 'icon' type = 'image/png'><title>Starting ${dec}...</title></head><body onload = 'loading()'><h1 id = 'head'>Preparing to launch <u>${dec}</u></h1><br><p id = 'dis'><a>Click</a> <strong><a href = '${game}'>HERE</a></strong> <a>to</a> <a>play</a>.</p></body>`);
}
//  document.getElementById("myText").value = "Johnny Bravo";

function search() {
    var query = document.getElementById('search_input').value;
    var query_lower = query.toLowerCase()
    
    if(query_lower.includes("rational")) {
        var q = question('Are you looking for Rational Numbers?')
        if(q = true) {
            load('Rational Numbers', 'games/rationalnumbers.html')   
        }
    } else {
        alert(`No results found for ${query}.`)
    }
    
}

function question(text) {
    if (confirm(text)) {
        return true;
    } else {
        return false;
    }
}