function testXML() {
    var xmlhttp = new XMLHttpRequest();
    var url = "/json/test.txt";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function myFunction(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<p>Movie name: ' + arr[i].url +
            '</p><p>Location' + arr[i].location + '</p><br>';
    }
    document.getElementById("id01").innerHTML = out;
}
