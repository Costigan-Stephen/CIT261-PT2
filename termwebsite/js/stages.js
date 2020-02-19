function getStage(stage) {
    document.getElementById("debug").innerHTML = stage;

    readJson(stage);

    switch (stage) {
        case 5:
            document.getElementById("buttoncase").classList.add("stage5");
            break;
        case 6:
            document.getElementById("buttoncase").classList.remove("stage5");
            document.getElementById("buttoncase").classList.remove("stage5-active");
            document.getElementById("buttoncase").classList.add("stage6");
            break;
        case 8:
            document.getElementById("buttoncase").classList.remove("stage6");
            break;
        case 17:
            multibutton("add", 5);
            break;
        case 18:
            multibutton("remove");
            sessionStorage.setItem("failed", "");
            break;
        case 29:
            opacity('add');
            break;
        case 30:
            opacity('remove');
            break;
        case 31:
            changeText("So... Faster?!");
            break;
            // default:
            //     changeText("Button Pressed " + stage + " times!");
    }
}

function move(x) {
    if (x.className == "frame stage5") {
        x.className = "frame stage5-active";
    } else if (x.className == "frame stage5-active") {
        x.className = "frame stage5";
    }
}

function multibutton(param, add) {
    if (param == "add") {
        var button = document.querySelector(".frame");
        var buttonClone;
        var innerbutton;
        for (var x = 0; x < add; x++) {
            buttonClone = button.cloneNode(true); //Clone the div and everything inside of it
            buttonClone.classList.add("clone"); //Add class for identification/deletion

            innerbutton = buttonClone.getElementsByClassName("button");
            for (var i = 0; i < innerbutton.length; i++) {
                innerbutton[i].setAttribute("onClick", "javascript: failed();");
            }
            document.querySelector("#outer").appendChild(buttonClone);
        }
    } else {
        var paras = document.getElementsByClassName("clone");

        while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
    }
}

function opacity(param) {
    if (param == "add") {
        document.querySelector(".frame").classList.add("opacity");
    } else {
        document.querySelector(".frame").classList.remove("opacity");
    }
}