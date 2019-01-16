let sent_btn = document.querySelector('.sent_btn')   //最後確認要篩選條件
var listpic = document.querySelector('.listpic')
var color_btn = document.querySelector('.color_btn')
var color = document.querySelectorAll('.color li')
let nowcolor
for(let x of color){
    x.addEventListener('click',function(){
        nowcolor = x.textContent;
        color_btn.textContent = nowcolor;
        color_btn.style.backgroundColor = '#757575'
        color_btn.style.color ='#ffffff'
        console.log(nowcolor);
    })
}

var ear = document.querySelectorAll('.ear li')
var ear_btn = document.querySelector('.ear_btn')
let nowear
for(let y of ear){
    y.addEventListener('click',function(){
        nowear = y.textContent;
        ear_btn.textContent = nowear;
        ear_btn.style.backgroundColor = '#757575'
        ear_btn.style.color ='#ffffff'
        console.log(nowear)
    })
}

var tail = document.querySelectorAll('.tail li')
var tail_btn = document.querySelector('.tail_btn')
let nowtail
for(let y of tail){
    y.addEventListener('click',function(){
        nowtail = y.textContent;
        tail_btn.textContent = nowtail;
        tail_btn.style.backgroundColor = '#757575'
        tail_btn.style.color ='#ffffff'
        console.log(nowtail)
    })
}


var collar = document.querySelectorAll('.collar li')
var collar_btn = document.querySelector('.collar_btn')
let nowcollar
for(let x of collar){
    x.addEventListener('click',function(){
        nowcollar = x.textContent;
        collar_btn.textContent = nowcollar;
        collar_btn.style.backgroundColor = '#757575'
        collar_btn.style.color ='#ffffff'
    })
}

var other = document.querySelectorAll('.other li')
var other_btn = document.querySelector('.other_btn')
let nowother
for(let x of other){
    x.addEventListener('click',function(){
        nowother = x.textContent;
        other_btn.textContent = nowother;
        other_btn.style.backgroundColor = '#757575'
        other_btn.style.color ='#ffffff'
    })
}
let num = 0;

sent_btn.addEventListener('click',function(){
    var str =''
    var color_j = color_btn.textContent;
    var ear_j = ear_btn.textContent;
    var tail_j = tail_btn.textContent;
    var collar_j = collar_btn.textContent;
    var other_j = other_btn.textContent;
    listpic.innerHTML = ' '
    console.log(color_j);
    console.log(ear_j)
    console.log(tail_j)
    console.log(collar_j)
    console.log(other_j)
    for(var i = 0; i < data.length; i++){
        if(color_j == '毛色' || color_j == '我不確定' || color_j == data[i].color) num += 1//繼續判斷
        else continue;

        if(ear_j == '耳朵型態' || ear_j == '我不確定' || ear_j == data[i].ear) num += 1;
        else continue;

        if(tail_j == '尾巴型態' || tail_j == '我不確定' || tail_j == data[i].tail) num += 1;
        else continue;

        if(collar_j == '項圈顏色' || collar_j == '我不確定' || collar_j == data[i].collar) num += 1;
        else continue;

        if(other_j == '其他特徵' || other_j == '我不確定' || other_j == data[i].other) num += 1;
        else continue;
        console.log(num);
        console.log(data[i]);
        console.log(data[i].name)
        str += ' ' + data[i].name + ' ';

        var newimg = document.createElement('img')
        newimg.src = data[i].image
        listpic.appendChild(newimg)
    }
    console.log(str);
    var height = 300;
    var list = document.querySelector('.List');
    if(str == '') {
        str = '查無此狗 要不要再試試其他篩選條件呢?'
        list.innerHTML = str;
        height = 0;
    }
    else list.innerHTML = '可能是以下幾位：' + str;
    
    document.documentElement.scrollTop = 80 + height;
    console.log(document.documentElement.scrollTop)
})