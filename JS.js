function drop1() {
    const info = document.querySelector('.INFORMATION1');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop2() {
    const info = document.querySelector('.INFORMATION2');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop3() {
    const info = document.querySelector('.INFORMATION3');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop4() {
    const info = document.querySelector('.INFORMATION4');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop5() {
    const info = document.querySelector('.INFORMATION5');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop6() {
    const info = document.querySelector('.INFORMATION6');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop7() {
    const info = document.querySelector('.INFORMATION7');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop8() {
    const info = document.querySelector('.INFORMATION8');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop9() {
    const info = document.querySelector('.INFORMATION9');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop10() {
    const info = document.querySelector('.INFORMATION10');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop11() {
    const info = document.querySelector('.INFORMATION11');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop12() {
    const info = document.querySelector('.INFORMATION12');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function drop13() {
    const info = document.querySelector('.INFORMATION13');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

    const circle = document.querySelector(".circle");

    const prog = document.querySelector('.progress');

    let holdTime;

    circle.addEventListener('mousedown',startHold);
    circle.addEventListener('mouseup', endHold);
    circle.addEventListener('mouseleave', endHold)

    circle.addEventListener('touchstart',startHold);
    circle.addEventListener('touchend',endHold);

    function startHold(){

        let progress = 0;
        prog.style.height ='0%';
        
        holdTimer = setInterval(() => {
            progress +=5;
            prog.style.height = progress + "%";

            if(progress >=100){
                clearInterval(holdTime);
                window.location.href ="tel:12345";
            }

     }, 100 );
    
    }
    function endHold(){
        clearInterval(holdTimer);
         prog.style.height ="0%";
    }


