window.onbeforeunload = function () {
    reset();
}

function clicked(element) {

    var x = document.getElementById("x").value;
    var key = sessionStorage.getItem("id");
    playsound('click');
    if (!x) {
        if (!key) {
            if (element.id) {
                key = element.id;
            } else {
                key = 1;
            }
        }
    } else {
        key = x;
        document.getElementById("x").value = "";
    }
    increment(element, key);
    getStage(parseInt(key), element);
}

function changeText(text) {
    document.getElementById("outputDiv").innerHTML = text;
}

function playsound(audio) {
    var snd = document.getElementById(audio);
    snd.play();
}

function increment(element, key) {
    var id = parseInt(key);
    var newid = id + 1;
    if (element.id) {
        element.id = newid;
    } else {
        element.id = key + 1;
    }
    sessionStorage.setItem("id", newid);
}

function reset() {
    document.getElementById(sessionStorage.getItem("id")).id = "";
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("failed", "");
    changeText("---");
    document.getElementById('debug').innerHTML = 0;
}

function failed() {
    playsound('wrong');
    var failcount = parseInt(sessionStorage.getItem("failed"));
    if (failcount) {
        failcount += 1;
    } else {
        failcount = 1;
    }
    this.visibility = "hidden";
    sessionStorage.setItem("failed", failcount);
    if (failcount == 1) {
        changeText("Ha! You fell for it!");
    } else if (failcount == 2) {
        changeText("Got you again!");
    } else if (failcount == 3) {
        changeText("Wow, 50% wrong so far!");
    } else if (failcount == 4) {
        changeText("You're actually really bad at this!");
    } else if (failcount == 5) {
        changeText("Are you messing with me?");
    } else if (failcount > 5) {
        changeText(". &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp; .");
    }

}