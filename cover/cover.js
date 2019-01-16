function box(target_in,star_time){
    var starx=0;
    var goalx=Math.floor((Math.random() * -1500))-800;
    
    var stary=0;
    var goaly=Math.floor((Math.random() * -1500))-800;
    var animationDuration = 1000;
    var animationStartTime=0;
    var target=target_in;
    var xPosition=0;
    var yPosition=0;
    goalx=-1500;
    goaly=-1500;
    function flow() {
        var currentTime = Date.now();
        var positionInAnimation = (currentTime - animationStartTime-star_time) / animationDuration;

        if(positionInAnimation>=0){
            xPosition = starx+positionInAnimation * (goalx-starx);
            yPosition = stary+positionInAnimation * (goaly-stary);
        }
        target.style.transform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)'+'rotate('+xPosition*0.02+'deg)';;
    
        if (positionInAnimation <= 1){
          requestAnimationFrame(flow);
        }else{         
          }
        }
    this.startAnimation = function() {
        animationStartTime = Date.now();
        requestAnimationFrame(flow);

    };
}

var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var box5 = document.querySelector('.box5');

var boxes=[];
var one_time=200;
boxes[1]=new box(box1,0);
boxes[2]=new box(box2,one_time);
boxes[3]=new box(box3,one_time*2);
boxes[4]=new box(box4,one_time*3);
boxes[5]=new box(box5,one_time*4);
// document.addEventListener("click",function(e){
//     for(var i=1;i<6;i++){
//         boxes[i].startAnimation();
//     }    
// })
for(var i=1;i<6;i++){
    boxes[i].startAnimation();
} 

setTimeout(function(){ 
    let title=document.title
    let mark=document.querySelector('.'+title)
    mark.style.color='#3a3a3a'
    mark.style.backgroundColor=' rgb(241, 237, 206)'
    mark.style.borderRadius= '15px 15px 0px 0px';
    mark.style.fontSize='23px'
    mark.style.fontWeight='bold'
 }, 1300);