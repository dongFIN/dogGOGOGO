

var dog = document.querySelector('.dog')
var Dog = document.querySelectorAll('.Dog')
var one = document.querySelector('.one')
var two = document.querySelector('.two')
const round = document.getElementById('round')
var btn_E = document.querySelector('.enter')
var btn_END = document.querySelector('.enterEND')
var Hint = document.querySelector('.Hint')
let ddd
var d1 = document.getElementById('d1')
var C = 'pic/衰臉.png'
var show = 'Dog4'
//console.log(btn_END)
for(let x of Dog){
    x.addEventListener('click',function(event){
        for(let x of Dog){
            x.style.backgroundColor = '#fff8ea'
        }
        var choice = event.currentTarget;
        choice.style.backgroundColor = '#999999'

        var c = choice.querySelector('img')
        C = c.getAttribute('src')

        show = choice.getAttribute('id')
        //console.log(show)
    })
}

function start(){
    //console.log(show)
    var flag = 0
    
    var D = document.createElement('img')
    D.src = C
    dog.appendChild(D)
    if(show == 'Dog1'){
        ddd = document.getElementById('d1')
        //console.log(ddd)
        d1.classList.remove('hidde')
        flag = 1;
    }
    else if(show == 'Dog2'){
        ddd = document.getElementById('d2')
        //console.log(ddd)
        // d.classList.remove('hidde')
        flag = 1;
    }
    else if(show == 'Dog3'){
        ddd = document.getElementById('d3')
        //console.log(ddd)
        // d.classList.remove('hidde')
    }
    else if(show == 'Dog4'){
        ddd = document.getElementById('d4')
        //console.log(ddd)
        // d.classList.remove('hidde')
    }
    //console.log(ddd)
    ddd.classList.remove('hidde')
    //console.log(ddd)


    if(flag){
        one.classList.remove('hidde')
        round1 = one.querySelector('.round1')
        round2 = one.querySelector('.round2')
        round3 = one.querySelector('.round3')
        round4 = one.querySelector('.round4')
    }
    else {
        two.classList.remove('hidde')
        round1 = two.querySelector('.round1')
        round2 = two.querySelector('.round2')
        round3 = two.querySelector('.round3')
        round4 = two.querySelector('.round4')
    }

    round.classList.add('hidde')
    dog.classList.remove('hidde')
    dog.classList.add('Start')
    setTimeout(right_btn,2300)
}
function again(){
    history.go(0) 
}
const btn_L = document.getElementById('buttonLeft')
const btn_R = document.getElementById('buttonRight')
const container = document.querySelector('.container')
var round1
var round2
var round3
var round4
const endDiv = document.querySelector('.end')
var index = 1
dog.classList.add('hidde')
Hint.classList.add('hidde')

function animate12(){ 
    round2.classList.remove('hidde')
}
function animate23(){ round3.classList.remove('hidde')}
function animate34(){ round4.classList.remove('hidde')}
function animate21(){ round1.classList.remove('hidde')}
function animate32(){ round2.classList.remove('hidde')}
function animate43(){ round3.classList.remove('hidde')}
function animateEnd(){ 
    endDiv.classList.remove('hidde')
    var dogend = document.querySelector('.dogend')
    var D = document.createElement('img')
    D.src = C
    dogend.appendChild(D)
}
//console.log(index)


function right_btn(){ //右鍵
    // btn_R.removeEventListener('click',right_btn)
    if(index == 1){
        console.log(ddd)
        ddd.classList.add('hidde')
        round1.classList.remove('hidde')
        var moving = round1.querySelector('.moving')
        moving.addEventListener('click',function move1(){
            round1.classList.add('hidde')
            dog.classList.remove('Start')
            Hint.classList.remove('hidde')
            index = 2
        })
    }
    if(index == 2){
        setTimeout(animate12, 3000);
        dog.classList.add('move12')
        dog.classList.remove('local1')
        dog.classList.add('local2')
        var moving = round2.querySelector('.moving')
        moving.addEventListener('click',function move2(){
            round2.classList.add('hidde')
            dog.classList.remove('move12')
            index = 3
        })
    }
    if(index == 3){
        setTimeout(animate23, 2000);
        dog.classList.add('move23')
        dog.classList.remove('local2')
        dog.classList.add('local3')
        var moving = round3.querySelector('.moving')
        moving.addEventListener('click',function move3(){
            round3.classList.add('hidde')
            dog.classList.remove('move23')
            index = 4
        })
    }
    if(index == 4){
        setTimeout(animate34, 2000);
        dog.classList.add('move34')
        dog.classList.remove('local3')
        dog.classList.add('local4')
        var moving = round4.querySelector('.moving')
        moving.addEventListener('click',function move4(){
            round4.classList.add('hidde')
            dog.classList.remove('move34')
            index = 5
            setTimeout(animateEnd,500)
        })
    }    
    // btn_R.addEventListener('click',right_btn)
}


function left_btn(){  //左鍵
    // btn_L.removeEventListener('click',left_btn)
    if(index >= 2)index -= 1;
    if(index == 4){
        setTimeout(animate43, 2000);
        dog.classList.add('move43')
        dog.classList.remove('local4')
        dog.classList.add('local3')
        var moving = round3.querySelector('.moving')
        moving.addEventListener('click',function move3(){
            round3.classList.add('hidde')
            dog.classList.remove('move43')
        })
    }
    if(index == 3){
        setTimeout(animate32, 2000);
        dog.classList.add('move32')
        dog.classList.remove('local3')
        dog.classList.add('local2')
        var moving = round2.querySelector('.moving')
        moving.addEventListener('click',function move2(){
            round2.classList.add('hidde')
            dog.classList.remove('move32')
        })
    }
    if(index == 2){
        setTimeout(animate21, 3000);
        dog.classList.add('move21')
        dog.classList.remove('local2')
        var moving = round1.querySelector('.moving')
        moving.addEventListener('click',function move1(){
            round1.classList.add('hidde')
            dog.classList.remove('move21')
        })
    }
    console.log(index)
    // btn_L.addEventListener('click',left_btn)
}
btn_E.addEventListener('click', start)
btn_R.addEventListener('click',right_btn)
btn_L.addEventListener('click',left_btn)
btn_END.addEventListener('click',again)