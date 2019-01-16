var height=document.documentElement.scrollTop
var bgPic=document.querySelector('.bgPic')

function onScroll(){
    height=document.documentElement.scrollTop
    if(height<500){
        bgPic.style.backgroundImage='url("Images/bgPic.JPG")'
        bgPic.style.marginTop='-300px'
    }
    else if(height>700&&height<2500){
        bgPic.style.backgroundImage='url("Images/小洛.jpg")'
        bgPic.style.marginTop='-100px'
    }
    else if(height>2500){
        bgPic.style.backgroundImage='url("Images/IMG_0349.JPG")'
        bgPic.style.marginTop='-100px'
    }
}

document.addEventListener('scroll',onScroll)