function loopQuote() {
    if (!clearInterval(getQuote)) {
        //Loop not run before, get new quote for display
        getQuote();
    }
    clearInterval(getQuote);
    RandomQuote();
    setInterval(getQuote, 10000); //Quote API
}

function clicked(element) {
    if (!clearInterval(getQuote)) {
        //Loop not run before, get new quote for display
        loopQuote();
    }

    var x = document.getElementById("x").value;
    var key = sessionStorage.getItem("id");
    playsound('click');
    if (!x) {
        if (!key) {
            if (element.id) {
                key = element.id;
            } else {
                key = 0;
            }
        }
    } else {
        key = x;
        document.getElementById("x").value = "";
    }
    increment(element, key);
    getStage(parseInt(key));
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

    if (localStorage.getItem("len")) {
        if (newid < localStorage.getItem("len")) {
            if (element.id) {
                element.id = newid;
            } else {
                element.id = key + 1;
            }
            sessionStorage.setItem("id", newid);
        } else {
            key = localStorage.getItem("len");
        }
    } else {
        if (element.id) {
            element.id = newid;
        } else {
            element.id = key + 1;
        }
        sessionStorage.setItem("id", newid);
    }

}

function reset() {
    document.getElementById(sessionStorage.getItem("id")).id = "";
    sessionStorage.setItem("id", "");
    sessionStorage.setItem("failed", "");
    changeText("---");
    document.getElementById('debug').innerHTML = 0;
    localStorage.setItem("action", "");
}

function failed() {
    playsound('wrong');
    var failcount = parseInt(sessionStorage.getItem("failed"));
    if (failcount) {
        failcount += 1;
    } else {
        failcount = 1;
    }
    sessionStorage.setItem("failed", failcount);
    if (failcount == 1) {
        changeText("Ha, got you!");
    } else if (failcount == 2) {
        changeText("And again!");
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

// function readJson(stage) {
//     var i = parseInt(stage) - 1;
//     var stages = JSON.parse(localStorage["quote"]);
//     var xhr = new XMLHttpRequest();
//     xhr.open(
//         "GET",
//         "https://raw.githubusercontent.com/Costigan-Stephen/CIT261-PT2/master/termwebsite/assets/stages.json",
//         true
//     );
//     xhr.send();

//     xhr.addEventListener("readystatechange", processRequest, false);

//     function processRequest() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             var notify = JSON.parse(xhr.responseText);
//             var action = notify.stages[stage].action;
//             localStorage.setItem("action", action);
//             localStorage.setItem("len", notify.stages.length);

//             if (notify.stages[i].text.failed) {
//                 if (sessionStorage.getItem("failed") >= 1) {
//                     changeText(notify.stages[i].text.failed);
//                 } else {
//                     changeText(notify.stages[i].text.success);
//                 }
//             } else {
//                 changeText(notify.stages[i].text);
//             }
//             document.getElementById('stringify').innerHTML = JSON.stringify(notify.stages[i].action);
//         }
//     }
// }

function readJson(stage) {
    var i = parseInt(stage);

    if (localStorage["stages"]) {
        var notify = JSON.parse(localStorage["stages"]);
    } else {
        GetStages();
        var notify = JSON.parse(localStorage["stages"]);
    }

    var action = notify.stages[stage].action;
    localStorage.setItem("action", action);
    localStorage.setItem("len", notify.stages.length);

    if (notify.stages[i].text.failed) {
        if (sessionStorage.getItem("failed") >= 1) {
            changeText(notify.stages[i].text.failed);
        } else {
            changeText(notify.stages[i].text.success);
        }
    } else {
        changeText(notify.stages[i].text);
    }
    document.getElementById('stringify').innerHTML = JSON.stringify(notify.stages[i].action);
}

function GetStages() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/Costigan-Stephen/CIT261-PT2/master/termwebsite/assets/stages.json", true);
    xhr.send();

    xhr.addEventListener("readystatechange", processRequest, false);

    function processRequest() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var stages = JSON.parse(xhr.responseText);
            localStorage.setItem("stages", JSON.stringify(stages));
        } else {
            var xhr2 = new XMLHttpRequest();
            xhr2.open("GET", "http://uplift.s-costigan.com/assets/stages.json", true);
            xhr2.send();

            xhr2.addEventListener("readystatechange", processRequest, false);

            function processRequest() {
                if (xhr2.readyState == 4 && xhr2.status == 200) {
                    var stages = JSON.parse(xhr2.responseText);
                    localStorage.setItem("stages", JSON.stringify(stages));
                }
            }
        }
    }
}
