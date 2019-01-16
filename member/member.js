var members=document.querySelectorAll('.member')
var detail=document.querySelector('.detail')
var hide=true
var high=document.body.scrollHeight
detail.style.height=high.toString()+'px'

var data={
    '01':{
        'src':'Images/001.png',
        'name':'張宇翔',
        'intro':'誰跟你說有介紹，不要瞎掰好嗎?'
    },
    '12':{
        'src':'Images/A1065512.png',
        'name':'楊于琪',
        'intro':"我覺得白白很漂亮，不過還是黑妹最靚麗。我覺得碳碳很可愛，不過還是咚咚最討喜。我很喜歡咚咚，可是最愛小不點。"
    },
    '35':{
        'src':'Images/12.jpg',
        'name':'邱思蓉',
        'intro':'你想知道甚麼嗎?? 我都不會告訴你呦 OuO'
    }
}

function clickMember(event){
    detail.classList.remove('hidden')

    let member=event.currentTarget
    let num=member.id;
    let people=data[num]
    let src=people['src']
    let nameword=people['name']
    let word=people['intro']
    
    let box=document.createElement('div')
    let image=document.createElement('img')
    let txt=document.createElement('div')
    let name=document.createElement('div')
    let n=document.createTextNode(nameword)
    let t=document.createTextNode(word)

    image.setAttribute("src", src)
    txt.classList.add('introWords')
    name.classList.add('introName')
    image.classList.add('introPic')
    box.classList.add('box')
    
    name.appendChild(n)
    txt.appendChild(t)
    box.appendChild(image)
    box.appendChild(name);
    box.appendChild(txt)

    box.addEventListener('mouseover',onBox)
    box.addEventListener('mouseout',outBox)
    detail.addEventListener('click',clickDetail)
    detail.appendChild(box)
}

function onBox(){
    hide=false
}

function outBox(){
    hide=true
}

function clickDetail(){
    if(!hide)return
    detail.classList.add('hidden')
    detail.innerHTML=""
}

for(var item of members){
    item.addEventListener('click',clickMember)
}