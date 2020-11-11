var display = document.getElementById("dis");
var heading = document.getElementById("head");
var game = document.getElementById("bob").innerHTML;

function loading() {
    setTimeout(function(){display.innerHTML = "Found files."}, 500);
    setTimeout(function(){display.innerHTML = "Loading In scripts..."}, 750)
    setTimeout(function(){display.innerHTML = "Loaded."}, 2000)
    setTimeout(function(){heading.innerHTML = "Press <a href = '" + game + "'>HERE</a> to launch."}, 2500)
    setTimeout(function(){display.innerHTML = ""}, 2500)
}