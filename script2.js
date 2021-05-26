var wordsforyou = [
	'Hello World',
	'UwU'
]

var contentDiv = document.getElementById('content');
var content = wordsforyou[Math.floor(Math.random() * wordsforyou.length)];
contentDiv.innerHTML = content;

var body = document.body;
var orientation = 255 + 'deg'
var midStop = Math.floor(Math.random() * 50) + 66 + '%'
var colourA = 'rgba(' + Math.floor(Math.random() * 44) + ',' + 1000 + ',' + Math.floor(Math.random() * 255) + ',1) 100%';
var colourB = 'rgba(' + Math.floor(Math.random() * 155) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) ' + midStop;
var colourC = 'rgba(' + Math.floor(Math.random() * 55) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) 000%';
var gradientString = 'linear-gradient(' + orientation + ', ' + colourA + ', ' + colourB + ', ' + colourC + ')'
console.log(gradientString)
body.style.backgroundImage = gradientString;

