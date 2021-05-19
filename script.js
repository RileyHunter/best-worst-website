let sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let partyBackground = () => {
    var backgroundGradients = Array.from(document.getElementsByClassName('backgroundGradient'));
    var visibleBackground = backgroundGradients.find(e => e.style.opacity == '1');
    var hiddenBackground = backgroundGradients.find(e => e.style.opacity == '0');
    var orientation = Math.floor(Math.random() * 360) + 1 + 'deg'
    var midStop = Math.floor(Math.random() * 50) + 26 + '%'
    var colourA = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) 0%';
    var colourB = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) ' + midStop;
    var colourC = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) 100%';
    var gradientString = 'linear-gradient(' + orientation + ', ' + colourA + ', ' + colourB + ', ' + colourC + ')'
    hiddenBackground.style.backgroundImage = gradientString;
    hiddenBackground.style.opacity = '1';
    visibleBackground.style.opacity = '0';

}

let partyFont = () => {
    var h1Divs = Array.from(document.getElementsByTagName('h1'));
    h1Divs.forEach(i => {
        i.style.color = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1)';
        i.style.fontSize = Math.floor((Math.random() * 40) + 20);
        i.style.transform = 'rotate(' + Math.floor(Math.random() * 260) + 'deg)'
    });
}

let party = async () => {
    partyBackground();
    partyFont();
    await sleep(500);
    party();
}

party();
