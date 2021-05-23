let green = document.getElementById('trafficLight1');
let yellow = document.getElementById('trafficLight2');
let red = document.getElementById('trafficLight3');

function change(){
    if(green.classList.contains('green')){
        green.classList.remove('green')
        yellow.classList.add('yellow')
    }
    else if(yellow.classList.contains('yellow')){
        yellow.classList.remove('yellow');
        red.classList.add('red');
    }
    else if(red.classList.contains('red')){
        red.classList.remove('red');
        green.classList.add('green');
    }
}
green.addEventListener('click', change)
yellow.addEventListener('click', change)
red.addEventListener('click', change)