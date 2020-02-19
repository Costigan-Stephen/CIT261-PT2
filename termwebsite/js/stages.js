function getStage(stage) {
    document.getElementById("debug").innerHTML = stage;

    readJson(stage);
    var action = localStorage.getItem("action");

    switch (action) {
        case 'add.stage5': //5
            document.getElementById("buttoncase").classList.add("stage5");
            break;
        case 'remove.stage5': //6
            document.getElementById("buttoncase").classList.remove("stage5");
            document.getElementById("buttoncase").classList.remove("stage5-active");
            document.getElementById("buttoncase").classList.add("stage6");
            break;
        case 'remove.stage6': //7
            document.getElementById("buttoncase").classList.remove("stage6");
            break;
        case 'multibutton.add': //17
            multibutton("add", 5, "clone", 4);
            break;
        case 'multibutton.remove': //18
            multibutton("remove", 0, "clone");
            sessionStorage.setItem("failed", "");
            break;
        case 'opacity.add':
            opacity('add');
            break;
        case 'opacity.fade':
            opacity('fade');
            break;
        case 'opacity.remove':
            opacity('remove');
            break;
        case 'water.add':
            water('add');
            break;
        case 'water.drain':
            water('fade');
            break;
        case 'water.remove':
            water('remove');
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

function multibutton(param, add, className, order) {
    order--;
    if (param == "add") {
        var button = document.querySelector(".frame");
        var buttonClone;
        var innerbutton;
        for (var x = 0; x < add; x++) {
            buttonClone = button.cloneNode(true); //Clone the div and everything inside of it
            buttonClone.classList.add(className); //Add class for identification/deletion

            innerbutton = buttonClone.getElementsByClassName("button");
            for (var i = 0; i < innerbutton.length; i++) {
                innerbutton[i].setAttribute("onClick", "javascript: failed();");
            }
            if (x > order) {
                document.querySelector("#outer").appendChild(buttonClone);
            } else {
                document.getElementById("outer").insertBefore(buttonClone, document.getElementById("outer").childNodes[0]);
            }



        }
    } else {
        var paras = document.getElementsByClassName(className);

        while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
    }
}

function opacity(param) {
    if (param == "add") {
        document.querySelector(".frame").classList.add("opacity");
    } else if (param == "fade") {
        document.querySelector(".frame").classList.remove("opacity");
        document.querySelector(".frame").classList.add("opacityfade");
    } else {
        document.querySelector(".frame").classList.remove("opacityfade");
    }
}

function water(param) {
    if (param == "add") {
        var water = document.createElement("DIV");
        var bubbles = document.createElement("DIV");
        var button = document.querySelector(".frame");

        button.classList.add("fullopacity");
        buttonClone = button.cloneNode(true); //Clone the div and everything inside of it

        water.classList.add("water");
        water.id = "water";
        bubbles.classList.add("bubbles");
        water.appendChild(bubbles);
        document.body.appendChild(water);

    } else if (param == "fade") {
        document.getElementById("buttoncase").classList.remove("fullopacity");
        var paras = document.getElementById("water");

        paras.classList.remove("water");
        paras.classList.add("waterdrain");

        var paras2 = document.getElementsByClassName("bubbles");
        while (paras2[0]) {
            paras2[0].parentNode.removeChild(paras2[0]);
        }
    } else {
        var paras = document.getElementsByClassName("waterdrain");

        while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
    }
}