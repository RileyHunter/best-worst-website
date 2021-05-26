setTimeout(function(){show('hold-on')},3000);
setTimeout(function(){show('meant-to')},4000);
setTimeout(function(){alert('Hello, Warren!')},6000);
setTimeout(function(){alert('thats not it either')},7000);
// setTimeout(function(){},1000);
setTimeout(function(){
    show('button1');
},10000);

button1 = () => {
    show('button2');
}
button2 = () => {
    show('button3');
    setTimeout(function(){show('ugly-text')},1000);
    setTimeout(function(){show('too-loud-text')},2000);
    setTimeout(function(){hide('too-loud-text')},3000);
    setTimeout(function(){
        var ugly = document.getElementById('ugly-text');
        ugly.setAttribute('class', 'tiny_text');
    },3000);
}
button3 = () => {
    show('finale-text');
    setTimeout(function(){show('finale-timer')},1000);
    setTimeout(function(){
        var timer = document.getElementById('finale-timer');
        timer.innerText = "2";
    },2000);
    setTimeout(function(){
        var timer = document.getElementById('finale-timer');
        timer.innerText = "1";
    },3000);
    setTimeout(function(){
        var timer = document.getElementById('finale-timer');
        timer.innerText = "0";
    },4000);
    setTimeout(function(){show('button4')}, 4000);
}

hide = (id) => {
    var element = document.getElementById(id);
    element.toggleAttribute('hidden');
}

show = (id) => {
    var element = document.getElementById(id);
    element.toggleAttribute('hidden');
}
$('#button4').on('mouseenter',function(e){
    if (document.firstHover != 'yes'){
        document.firstHover = 'yes';
        setTimeout(function(){alert('i stole the code to do that lololol')}, 500);
    }
    else if (document.secondHover != 'yes' && document.firstHover == 'yes'){
        document.secondHover = 'yes';
    }
    else if (document.thirdHiver != 'yes' && document.secondHover == 'yes'){
        document.thirdHiver = 'yes';
    }
    var maxX = $(window).width() - $(this).width();
    var maxY = $(window).height() - $(this).height();
    $(this).css({
        'left':getRandomInt(0, maxX),
        'top':getRandomInt(0, maxY)
    });
    if (document.thirdHiver == 'yes'){
        setTimeout(function(){var e = document.getElementById('hello-world'); e.style.display = 'block'}, 500);
        setTimeout(function(){alert('just scroll down, cheeselips')}, 500);
    }
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}