var tags=document.querySelectorAll('.tag')
var local=document.title
var l=document.querySelector('.'+local)

let title=document.title
let mark=document.querySelector('.'+title)
mark.style.color='#3a3a3a'
mark.style.backgroundColor=' rgb(241, 237, 206)'
mark.style.borderRadius= '15px 15px 0px 0px';
mark.style.fontSize='23px'
mark.style.fontWeight='bold'

function tagOn(event){
    //console.log(1)
    let tag=event.currentTarget
    tag.style.animation="tagOn"
    tag.style.animationFillMode="forwards"
}

function tagOff(event){
    let tag=event.currentTarget
    tag.style.animation="tagOff 0.75s"
    tag.style.animationFillMode="forwards"
}

for(var item of tags){
    if(item==l)continue
    item.addEventListener('mouseover',tagOn)
    item.addEventListener('mouseout',tagOff)   
}
//console.log("5555");