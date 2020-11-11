            //get links on page
            var title = document.getElementById("pagetitle");
            var text = document.getElementById("lvld");
            var bar = document.getElementById("lvl");
            var button = document.getElementById("main");
            var dis = document.getElementById("display");
            var body = document.getElementById("body");
            var aud = document.getElementById("audio");
            var links = document.getElementById("git");

            //other vars

            var message = 0;

            //functions
            function run() {
                var username = grab("username");
                if(button.innerHTML === "Start") {
                    title.innerHTML = "MathMan - " + username + "'s game";
                    bar.style.height = 0;
                    bar.style.width = 0;
                    text.style.fontSize = 0;
                    button.style.fontSize = 0;
                    button.style.padding = 0;
                    body.style.backgroundColor = "azure";
                    setTimeout(function(){
                        button.innerHTML = "Next";
                        button.style.padding = "35px 70px";
                        button.style.fontSize = "18px";
                        dis.style.fontSize = "29px";
                        dis.innerHTML = "It was a dark and stormy night... MathMan was patroling the city.";
                    },1000);
                } else if(button.innerHTML === "Next") {
                    if(message === 0) {
                    button.style.fontSize = 0;
                    button.style.padding = 0;
                    dis.style.fontSize = 0;
                    setTimeout(function(){
                        button.innerHTML = "Next";
                        button.style.padding = "35px 70px";
                        button.style.fontSize = "18px";
                        dis.style.fontSize = "29px";
                        dis.style.color = "#ffffff";
                        body.style.backgroundColor = "darkblue";
                        dis.innerHTML = "Lightning crakeled. " + username + " &amp; MathMan entered a restraunt for dinner.";
                    },1000);
                    } else if(message === 1) {
                        button.style.fontSize = 0;
                        button.style.padding = 0;
                        dis.style.fontSize = 0;
                        setTimeout(function(){
                            button.innerHTML = "Next";
                            button.style.padding = "35px 70px";
                            button.style.fontSize = "18px";
                            dis.style.fontSize = "29px";
                            dis.style.color = "black";
                            body.style.backgroundColor = "floralwhite";
                            dis.innerHTML = username + " talked with MathMan they were becoming friends. Until...  ate the cookie.";
                        },1000);
                    }else if(message === 2) {
                        button.style.fontSize = 0;
                        button.style.padding = 0;
                        dis.style.fontSize = 0;
                        setTimeout(function(){
                            button.innerHTML = "Next";
                            button.style.padding = "35px 70px";
                            button.style.fontSize = "18px";
                            dis.style.fontSize = "29px";
                            body.style.backgroundColor = "#000000"
                            dis.innerHTML = "&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br>&#127850;<br><br>&#128128;";
                        },1000);
                    }else if(message === 3) {
                        button.style.fontSize = 0;
                        button.style.padding = 0;
                        dis.style.fontSize = 0;
                        setTimeout(function(){
                            button.innerHTML = "Next";
                            button.style.padding = "35px 70px";
                            button.style.fontSize = "18px";
                            dis.style.fontSize = "29px";
                            body.style.backgroundColor = 'aquamarine';
                            dis.innerHTML = "Little did you know that the cookie was a way to switch minds... until it happened. &#129504;";
                        },1000);
                    }else if(message === 4) {
                        button.style.fontSize = 0;
                        button.style.padding = 0;
                        dis.style.fontSize = 0;
                        setTimeout(function(){
                            button.innerHTML = "Next";
                            button.style.padding = "35px 70px";
                            button.style.fontSize = "18px";
                            dis.style.fontSize = "29px";
                            dis.innerHTML = "MathMan is not a easy peron to swith minds with... it was very hard for you.";
                        },1000);
                    }else if(message === 5) {
                        button.style.fontSize = 0;
                        button.style.padding = 0;
                        dis.style.fontSize = 0;
                        setTimeout(function(){
                            button.innerHTML = "Next";
                            button.style.padding = "35px 70px";
                            button.style.fontSize = "18px";
                            dis.style.fontSize = "29px";
                            dis.innerHTML = "&#10133; &#10134; &#10135; &#10060; Maybe if fighting crime was not his daily basis, it would be easy. But the math. That is hard. &#10060; &#10135; &#10134; &#10133;";
                        },1000);
                    }else if(message === 6) {
                        button.style.fontSize = 0;
                        button.style.padding = 0;
                        dis.style.fontSize = 0;
                        setTimeout(function(){
                            dis.style.fontSize = "29px";
                            dis.innerHTML = "But now...";
                        },1000);
                        setTimeout(function(){
                            dis.innerHTML = "It is your job.";
                        }, 2500)
                        setTimeout(function(){
                            dis.innerHTML = "Can You Save The Earth?";
                        }, 4000)
                        setTimeout(function(){
                            dis.innerHTML = "Well, it is time. Press below to start...";
                            button.style.padding = "35px 70px";
                            button.style.fontSize = "18px";
                            button.innerHTML = "Start The Game"
                        }, 7500)
                    }//message checking
                    message = message + 1;
                }else if(button.innerHTML === "Start The Game") {
                    button.style.fontSize = 0;
                    button.style.padding = 0;
                    aud.innerHTML = "";
                    dis.innerHTML = 'Loading...';
                    dis.style.color = "#ffffff";
                    body.style.backgroundColor = "#000000";
                    links.innerHTML = '';
                    setTimeout(function(){
                        dis.style.fontSize = 0;
                    }, 1500)
                    setTimeout(function(){location.replace("gamelist.html")}, 2500)
                }else if(button.innerHTML ==== "🍪 ① Check Cookie 1 ① 🍪") {
                    check("username", "What should we call you?\n\n", "", 2, 15);
                    button.innerHTML = "🍪 ② Check Cookie 2 ② 🍪";
                }else if(button.innerHTML = "🍪 ② Check Cookie 2 ② 🍪") {
                    check("gender", "Boy or girl?\nB - Boyn\nG - Girl\n\n", "", 0, 2)
                    button.innerHTML = "Start"
                }//end of button if/else
            }//end function
            function win(website, dec){
                var myWindow = window.open("", "");
                myWindow.document.write(`<html><head><link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"><style>body{font-family: 'Source Sans Pro', sans-serif;}a{font-family: 'Source Sans Pro', sans-serif;color:black;}a:hover{color:blue;}</style><title>Taking you to ` + dec + `</title></head><body onload = 'start()'>Taking you to ` + dec + ` - Click <a href = '` + website + `'>here</a> to go there.</body></html>`);
            }
function setCookie(name, value, ex) {
  var d = new Date();
  d.setTime(d.getTime() + (ex * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function grab(query) {
  var name = query + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function check(ccookie, question, defaultstring, minlength, maxlength, r) {
  var cookie = grab(ccookie);
  var res;
  if (cookie != "") {
  } else {
    if(question === '-none-') {
        res = defaultstring;
    } else {
        res = ask(question, minlength, maxlength, defaultstring);
    }
    if (res != "" && res != null) {
      setCookie(ccookie, res, 365);
    }
  }
}
function ask(ask, minl, maxl, def, reload) {
    var responce = prompt(ask, def);
    if(responce == null || responce == "") {
        alert("Please provide a responce.");
        ask(ask, minl, maxl);
        return "Error - Failed to provide a correct responce.";
    } else if (responce.length <= minl) {
        alert("You need to provide a responce longer than " + minl + " characters.\n\nYour responce:   " + responce);
        ask(ask, minl, maxl);
        return "Error - Failed to provide a correct responce.";
    } else if (responce.length >= maxl) {
        alert("You need to provide a responce shorter than " + maxl + " characters.");
        ask(ask, minl, maxl);
        return "Error - Failed to provide a correct responce.";
    } else {
        return responce;
    }
}
