var canvas = document.getElementById('canvas');
//Could have used the same element for all, but I like separation
var cir = canvas.getContext('2d'); // Face, Throat
var mth = canvas.getContext('2d'); // Mouth
var eye = canvas.getContext('2d'); // Eyes
var tth = canvas.getContext('2d'); // Teeth
var tng = canvas.getContext('2d'); // Tongue

//Outer Circle
cir.beginPath();
cir.arc(75, 75, 50, 0, Math.PI * 2, true);
cir.fillStyle = "yellow";
cir.stroke();
cir.fill();

//Mouth
mth.beginPath();
mth.arc(75, 75, 35, 0, Math.PI, false);
mth.moveTo(110, 75);
mth.lineTo(40, 75);
mth.fillStyle = '#ad1813';
mth.stroke();
mth.fill();

//Throat
cir.beginPath();
cir.arc(75, 80, 15, 0, Math.PI, false);
cir.fillStyle = "black";
cir.fill();

//Tongue
tng.beginPath();
tng.moveTo(55, 100);
tng.bezierCurveTo(55, 100, 75, 80, 95, 100);
tng.fillStyle = "#e44501";
tng.fill();

//Teeth
tth.beginPath();
tth.moveTo(105, 83);
tth.lineTo(45, 83);
tth.lineTo(45, 75);
tth.lineTo(105, 75);
tth.lineTo(105, 83);
tth.stroke();
tth.moveTo(50, 100);
tth.bezierCurveTo(50, 100, 75, 124, 100, 100);
tth.lineTo(50, 100);
tth.fillStyle = 'white';
tth.stroke();
tth.fill();

//Eyes
eye.beginPath();
eye.arc(60, 55, 5, 0, Math.PI * 2, true); // Left eye
eye.moveTo(95, 55);
eye.arc(90, 55, 5, 0, Math.PI * 2, true); // Right eye
eye.fillStyle = "black";
eye.fill();