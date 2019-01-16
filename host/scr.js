function Box (target_in,main_x,main_y,Serial) {
    var starx=Math.floor((Math.random() * 1300));
    var stary=Math.floor((Math.random() * 400))+150;
    var mainx=main_x;
    var mainy=main_y;
    var goalx=Math.floor((Math.random() * 1300));
    var goaly=Math.floor((Math.random() * 400))+150;
    var animationStartTime = 0;
    var animationDuration = 15000;//快慢
    var target = target_in;
    //target.style.transform = 'translate(' + starx + 'px, ' + stary + 'px)';
    var xPosition = 0;
    var yPosition = 0;
    var rotatenum=0;
    var x_slide_rang=0.005*Serial+0.06;
    //console.log(x_slide_rang);
    var flowmode=0;//0=flow 1=runaway 2=gomain 3=goflow
    this.startAnimation = function() {
      animationStartTime = Date.now();
      requestAnimationFrame(flow);
    };
    function flow() {
      var currentTime = Date.now();
      var positionInAnimation = (currentTime - animationStartTime) / animationDuration;
      xPosition = starx+positionInAnimation * (goalx-starx);
      yPosition = stary+positionInAnimation * (goaly-stary);
      if(flowmode==0){
        rotatenum=yPosition*0.3;
      }else if(flowmode==2){
        rotatenum=(1-positionInAnimation)*yPosition*0.3;//xPosition*0.2/(1-positionInAnimation); 
      }else if(flowmode==3){
        rotatenum=positionInAnimation*yPosition*0.3;
      }
      target.style.transform = 'translate(' + xPosition + 'px, ' + yPosition + 'px)'+'rotate('+rotatenum+'deg)';
  
      if (positionInAnimation <= 1){
        requestAnimationFrame(flow);
      }else{
        if(flowmode==0||flowmode==3){
            flowmode=0;
            starx=xPosition;
            stary=yPosition;
            goalx=Math.floor((Math.random() * 1300));
            goaly=Math.floor((Math.random() * 400))+150;
            animationDuration = 15000;
            animationStartTime = Date.now();
            requestAnimationFrame(flow);            
        }
      }
    }
    this.runaway = function(){
        flowmode=1;
        starx=xPosition;
        stary=yPosition;
        goalx=Math.floor((Math.random() * 1300));
        goaly=-100;
        animationDuration=1000;
        animationStartTime = Date.now();
        requestAnimationFrame(flow);
    }
    this.gomm = function(){
      flowmode=2;
      starx=xPosition;
      stary=yPosition;
      goalx=mainx;
      goaly=mainy;
      //console.log(mainx,mainy);
      animationDuration=900;
      animationStartTime = Date.now();
      requestAnimationFrame(flow);
    }
    this.goflow = function(){
      flowmode=3;
      starx=xPosition;
      stary=yPosition;
      goalx=Math.floor((Math.random() * 1300));
      goaly=Math.floor((Math.random() * 400))+150;
      animationDuration=1200;
      animationStartTime = Date.now();
      requestAnimationFrame(flow);
    }
    this.clickche = function(){
      //console.log(flowmode);
      if(flowmode==0){
        this.gomm();
      }else if(flowmode==2){
        this.goflow();
      }
    }
    this.X_slide = function(movex){
      if(flowmode==0){
        starx=starx-movex*x_slide_rang;
        goalx=goalx-movex*x_slide_rang;        
      }

    } 
}


var body1 = document.querySelector('.body1');
var body2 = document.querySelector('.body2');
var body3 = document.querySelector('.body3');
var body4 = document.querySelector('.body4');
var body5 = document.querySelector('.body5');
var bottomLip = document.querySelector('.bottomLip');
var leftEar = document.querySelector('.leftEar');
var leftEye = document.querySelector('.leftEye');
var leftEye_back = document.querySelector('.leftEye_back');  
var leftFace = document.querySelector('.leftFace');
var leftFace2 = document.querySelector('.leftFace2');
var leftMouth = document.querySelector('.leftMouth');
var nose = document.querySelector('.nose');
var rightEye = document.querySelector('.rightEye');
var rightEye_back = document.querySelector('.rightEye_back');
var rightFace = document.querySelector('.rightFace');
var rightMouth = document.querySelector('.rightMouth');
var rigthEar = document.querySelector('.rigthEar');
var tongue = document.querySelector('.tongue');
var topLip = document.querySelector('.topLip');
var a=75;

var box=[];
box[1] = new Box(rightEye,780,200+a,1);
box[2] = new Box(body1,600,400+a,2);
box[3] = new Box(body2,650,360+a,3);
box[4] = new Box(body3,660,440+a,4);
box[5] = new Box(body4,710,380+a,5);
box[6] = new Box(body5,780,400+a,6);
box[7] = new Box(leftEye_back,640,220+a,7);
box[8] = new Box(leftFace,590,170+a,8);
box[9] = new Box(leftFace2,575,260+a,9);
box[10] = new Box(bottomLip,715,330+a,10);
box[11] = new Box(leftEar,550,100+a,11);
box[12] = new Box(leftEye,690,230+a,12);
box[13] = new Box(leftMouth,700,250+a,13);
box[14] = new Box(nose,740,220+a,14);
box[15] = new Box(rightFace,695,130+a,15);
box[16] = new Box(rightEye_back,780,195+a,16);
box[17] = new Box(rightMouth,759,203+a,17);
box[18] = new Box(tongue,750,320+a,18);
box[19] = new Box(topLip,700,290+a,19);
box[20] = new Box(rigthEar,725,72+a,20);
for(var i=1;i<21;i++){
  box[i].startAnimation();
}
document.querySelector(".big").addEventListener('click',function(e) {
  for(var i=1;i<21;i++){
      box[i].clickche();  
  }
})

var oringx=-10;
var nowx=-10;
var movex=0;
document.querySelector(".big").addEventListener('mousemove',function(e) {
  if(oringx==-10){
    oringx=event.clientX;
  }else {
    nowx=event.clientX;
    movex=nowx-oringx;
    for(var i=1;i<21;i++){
      box[i].X_slide(movex);  
    } 
    oringx=nowx; 
  }
  
})
/*
    this.goflow = function(){
      flowmode=0;
      starx=xPosition;
      stary=yPosition;
      goalx=Math.floor((Math.random() * 1400));
      goaly=Math.floor((Math.random() * 590));
      animationDuration=2000;
      animationStartTime = Date.now();
      requestAnimationFrame(flow);
    }*/

/*
  var target = document.querySelector('.body1');
  var target2 = document.querySelector('.small2');
  var box = new Box(target,200,200);
  box.startAnimation();
  var box2 = new Box(target2,200,200);
  box2.startAnimation();
  document.addEventListener('click',function(e) {
    box.runaway();
    box2.runaway();
  })
  */
