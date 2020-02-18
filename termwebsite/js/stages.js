function getStage(stage, element) {
    document.getElementById('debug').innerHTML = stage;
    switch (stage) {
        case 1:
            changeText("Can't you read? The sign said not to press the button!");
            break;
        case 2:
            changeText("What part of 'DON'T' was unclear?");
            break;
        case 3:
            changeText("Well then...");
            break;
        case 4:
            changeText("I feel I may need to make this more difficult...");
            break;
        case 5:
            document.getElementById('buttoncase').classList.add("stage5");
            changeText("How about... NOW!");
            break;
        case 6:
            document.getElementById('buttoncase').classList.remove("stage5");
            document.getElementById('buttoncase').classList.remove("stage5-active");
            document.getElementById('buttoncase').classList.add("stage6");
            changeText("I fear I may have underestimated you...");
            break;
        case 7:
            document.getElementById('buttoncase').classList.remove("stage6");
            changeText("Fine, whatever. what do I know.  Go ahead and press it.");
            break;
        case 8:
            changeText("What do I care anyway?");
            break;
        case 9:
            changeText("It's just a big red button after all.");
            break;
        case 10:
            changeText("Besides, who wants to press a silly button anyway?");
            break;
        case 11:
            changeText("...");
            break;
        case 12:
            changeText(". . .");
            break;
        case 13:
            changeText(". &nbsp; . &nbsp; .");
            break;
        case 14:
            changeText(". &nbsp;&nbsp;&nbsp; . &nbsp;&nbsp;&nbsp; .");
            break;
        case 15:
            changeText("...Alright it seems ignoring you isn't changing anything");
            break;
        case 16:
            changeText("Time to get creative...");
            break;
        case 17:
            multibutton('add');
            changeText("BEHOLD!!!");
            break;
        case 18:
            multibutton('remove');
            if (sessionStorage.getItem("failed") >= 1) {
                changeText("Looks like you aren't as clever as you thought!!");
            } else {
                changeText("Well... aren't you clever!");
            }
            sessionStorage.setItem("failed", "");
            break;
        case 19:
            changeText("So... Still pressing that button huh?");
            break;
        case 20:
            changeText("You think there'll be something at the end of this road.");
            break;
        case 21:
            changeText("Did you ever consider that there might not be...");
            break;
        case 22:
            changeText("That this might just go on and on?");
            break;
        case 23:
            changeText("Seriously, try me! I can do this all day");
            break;
        case 24:
            changeText("...");
            break;
        case 25:
            changeText("Alright, Stop!");
            break;
        case 26:
            changeText("STOP!");
            break;
        case 27:
            changeText("...I now suspect you to be illiterate.");
            break;
        case 28:
            changeText("Guess I'll have to stop you myself...");
            break;
        case 29:
            changeText("TAKE THAT!");
            break;
        case 30:
            changeText("Hmm....");
            break;
        case 31:
            changeText("So... Faster?!");
            break;
        default:
            changeText("Button Pressed " + stage + " times!");
    }
}

function move(x) {

    if (x.className == "frame stage5") {
        x.className = "frame stage5-active";
    } else if (x.className == "frame stage5-active") {
        x.className = "frame stage5";
    }
}

function multibutton(param) {
    if (param == "add") {
        var button = document.querySelector(".frame");
        var buttonClone;
        var innerbutton;
        var newElements = 5;
        for (var x = 0; x < newElements; x++) {
            buttonClone = button.cloneNode(true); // False means only clone the div and not what is
            buttonClone.classList.add("clone");

            innerbutton = buttonClone.getElementsByClassName('button');
            for (var i = 0; i < innerbutton.length; i++) {
                innerbutton[i].setAttribute("onClick", "javascript: failed();");
            }
            document.querySelector("#outer").appendChild(buttonClone);
        }
    } else {
        var paras = document.getElementsByClassName('clone');

        while (paras[0]) {
            paras[0].parentNode.removeChild(paras[0]);
        }
    }
}