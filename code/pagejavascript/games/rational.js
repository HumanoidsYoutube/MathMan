var i = 0;
var txt = '';
var speed = 50;
var id = '';


function start() {
    var startbutton = document.getElementById('startbutton');
    startbutton.remove()
        var status = document.createElement('h1');
        status.id = 'status'
        status.innerHTML =''
        document.body.appendChild(status)
        type('Hello!', 'status', 50)
        setTimeout(function() {
            type('I see you there.', 'status', 50)
            setTimeout(function() {
                type('You can\'t hide from me.', 'status', 50)
                setTimeout(function() {
                    type('I will give you 10 seconds.', 'status', 50)
                    setTimeout(function() {
                        type('Try.', 'status', 200)
                        document.body.style.backgroundColor = 'black';
                        status.style.color = 'white';
                        setTimeout(function() {
                            status.style.color = 'black';
                            var loc = prompt('Where do you want to hide?', 'basement')
                                setTimeout(function(){
                                    status.innerHTML = 'You failed. Great Job.'
                                    alert(loc + ' did not work! Try somthing else next time...')
                                    document.body.style.backgroundColor = 'white';
                                        setTimeout(function(){
                                            type('I will use this to take over the city!\nMathMan can\'t stop me now!', 'status', 50)
                                            setTimeout(function(){
                                                status.style.color = 'white';
                                                setTimeout(function(){
                                                    status.remove()
                                                    part('1')
                                                }, 1000)
                                            }, 6000)
                                        }, 4000)
                                }, 6000)
                        }, 4000)
                    }, 3500)
                }, 3500)
            }, 3500)
        }, 1500)
    }


function type(text, ii, sped) {
    id = ii
    txt = text
    speed = sped
    i = 0;
    document.getElementById(id).innerHTML = '';
    typeWriter()
}

function part(numberofpart) {
    var title = document.getElementById('title');
    var tip;
    if(numberofpart === '1') {
        title.innerHTML = 'Stage 1 | Rational Numbers | MathMan'
        tip = document.createElement('p');
        tip.innerHTML = 'Congrats! You completed Stage 1!'
        tip.id = 'tip'
        tip.style.background = 'none';
        document.body.appendChild(tip)
        setTimeout(function() {
            tip.style.fontSize = 0;
            
        }, 1500)
        var clipart = document.createElement('img');
        clipart.src = 'https://humanoidsyoutube.github.io/MathManAbout/media/images/favicon/favicon%201.svg';
        clipart.id = 'mathman'
        document.body.appendChild(clipart)
        var speech = document.createElement('h1');
        speech.innerHTML = '';
        speech.id = 'mmtalk';
        document.body.appendChild(speech);
        type('It is almost time to go.', 'mmtalk', 55)
        setTimeout(function() {
            type('Why?', 'mmtalk', 100)
            clipart.src = '../../media/sidekick.svg'
            setTimeout(function() {
                type('They are coming.', 'mmtalk', 250)
                clipart.src = 'https://humanoidsyoutube.github.io/MathManAbout/media/images/favicon/favicon%201.svg'
                setTimeout(function() {
                    clipart.style.opacity = 0;
                    speech.style.opacity = 0;
                    document.body.style.backgroundColor = 'black'
                    setTimeout(function() {
                        part('2')
                    }, 1000)
                }, 5000)
            }, 1500)
        }, 2000)
    } else if(numberofpart === '2') {
        tip = document.getElementById('tip');
        document.body.style.backgroundColor = '#ff5608';
        tip.style.fontSize = 20;
        tip.innerHTML = 'New battle!';
        setTimeout(function(){
            tip.style.fontSize = 0;
        }, 1000)
    }
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
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
      return cookie;
  } else {
    if(question === '-none-') {
        res = defaultstring;
    } else {
        res = ask(question, minlength, maxlength, defaultstring);
    }
    if (res != "" && res != null) {
      setCookie(ccookie, res, 365);
      return res;
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

function clearloader() {
    setTimeout(function(){
        document.getElementById('loader').style.height = 0;
        document.getElementById('loadertop').style.height = 0;
        document.getElementById('loaderbottom').style.height = 0;
        setTimeout(function(){
            document.getElementById('loader').remove()
            document.getElementById('loadertop').remove()
            document.getElementById('loaderbottom').remove()
        }, 1000)
    }, 2500)
}