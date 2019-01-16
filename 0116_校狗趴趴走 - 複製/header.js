var tags=document.querySelectorAll('.tag')
// console.log(location.href)

function tagOn(event){
    // console.log(1)
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
    // console.log(item)
    item.addEventListener('mouseover',tagOn)
    item.addEventListener('mouseout',tagOff)   
}