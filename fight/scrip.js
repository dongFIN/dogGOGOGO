/*
var canvas = document.getElementById('canvas');
  canvas.width=1000;
  canvas.height=600;
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.fillRect(0,0,100,100);

}
*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var background = new Image();
var tree = new Image();
var dog = new Image();
var cat = new Image();
var bone = new Image();
var fish = new Image();
var bloodline_a = new Image();
var bloodline_b = new Image();
var catwin = new Image();
var dogwin = new Image();
var title2 = new Image();
var clicktostar = new Image();
var arrow = new Image();

background.src="background.jpg";
tree.src="tree.png";
dog.src="dog.png";
cat.src="cat.png";
bone.src="bone.png";
fish.src="fish.png";
bloodline_a.src="bloodline_a.png"
bloodline_b.src="bloodline_b.png"
catwin.src="catwin.png"
dogwin.src="dogwin.png"
title2.src="title.png"
clicktostar.src="clicktostar.png"
arrow.src="arrow.png";
canvas.width=1000;
canvas.height=600;
var screen={
  winner:0,//dog 1 cat 2
  gamemode:0,
  choose_screen:function(){
    if(this.gamemode==0){
      raf = window.requestAnimationFrame(star_screen);
    }
    if(this.gamemode==1){
      raf = window.requestAnimationFrame(draw);
    }
    if(this.gamemode==2){
      raf = window.requestAnimationFrame(gameover_screen);
    }  
  },
}
var drag={
  origin_x:0,
  origin_y:0,
  next_x:0,
  next_y:0,
  distance:function() {
    return Math.sqrt((this.origin_x-this.next_x)*(this.origin_x-this.next_x)+(this.origin_y-this.next_y)*(this.origin_y-this.next_y));
  }
};
var bonemod = {
  x: 150,
  y: 350,
  vx: 10,
  vy: -12,
  ax:0,
  ay:0.3,
  star:0,
  gomove:0,
  draw: function() {
    ctx.drawImage(bone,this.x,this.y,100,100);
  },
  back: function() {
    this.x=150;
    this.y=350;
  },
  hitcheck:function(){
    var kk=0;
    var dis=Math.sqrt((this.x+50-860)*(this.x+50-860)+(this.y+50-420)*(this.y+50-420));
    //console.log(dis);
    if(dis<100){
      kk=1;
    }
    return kk;
  },
  treecheck:function(){
    var kk=0;
    if(this.x>=395&&this.x<=405&&this.y>=70){
      kk=1;
    }
    return kk;
  },
};
var fishmod = {
  x: 750,
  y: 350,
  vx: 10,
  vy: -12,
  ax:0,
  ay:0.3,
  star:0,
  gomove:0,
  draw: function() {
    ctx.drawImage(fish,this.x,this.y,100,100);
  },
  back: function() {
    this.x=750;
    this.y=350;
  },
  hitcheck:function(){
    var kk=0;
    var dis=Math.sqrt((this.x+50-160)*(this.x+50-160)+(this.y+50-420)*(this.y+50-420));
    //console.log(dis);
    if(dis<100){
      kk=1;
    }
    return kk;
  },  
  treecheck:function(){
    var kk=0;
    if(this.x>=490&&this.x<=500&&this.y>=70){
      kk=1;
    }
    return kk;
  },
};

var dogmod = {
  hp:5,
  draw: function() {
    ctx.drawImage(dog,100,340,120,180);
    ctx.drawImage(bloodline_b,30,50,250,40);
    ctx.strokeStyle = "#C4281F"
    ctx.lineJoin = "round";
    ctx.lineWidth = 26;
    ctx.strokeRect(53, 69, 205*(this.hp/5), 1);
  }
};
var catmod = {
  hp:5,
  draw: function() {
    ctx.drawImage(cat,800,340,120,180);
    ctx.drawImage(bloodline_b,720,50,250,40);
    ctx.strokeStyle = "#C4281F"
    ctx.lineJoin = "round";
    ctx.lineWidth = 26;
    ctx.strokeRect(743, 69, 205*(this.hp/5), 1);
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(background,0,0,canvas.width, canvas.height);
  ctx.drawImage(tree,375,170,250,320);
  dogmod.draw();
  catmod.draw();
  //
  if(bonemod.star==0&&fishmod.star==0&&fishmod.gomove==0){
    ctx.drawImage(arrow,135,220,50,100);
  }
  if(bonemod.star==1){
    ctx.drawImage(arrow,135,220,50,100);
  }
  if(fishmod.star==1){
    ctx.drawImage(arrow,835,220,50,100);
  }
  //丟骨頭
  if(bonemod.gomove==1){
    bonemod.draw();
    
    bonemod.x+=bonemod.vx;
    bonemod.vy+=bonemod.ay;
    bonemod.y+=bonemod.vy;   
    //判斷有沒有打到
    if(bonemod.hitcheck()||bonemod.treecheck()||bonemod.y>630){
      if(bonemod.hitcheck()){
        catmod.hp=catmod.hp-1;
      }      
      bonemod.back();
      bonemod.gomove=0;
      fishmod.star=1;
      bonemod.star=0;
    }
    //拋物線
    /*
    ctx.fill();
    ctx.arc(bonemod.x+30,bonemod.y+50,5,0,Math.PI*2,true);
    */
  }
  //丟魚骨
  if(fishmod.gomove==1){
    fishmod.draw();
    fishmod.x+=fishmod.vx;
    fishmod.vy+=fishmod.ay;
    fishmod.y+=fishmod.vy;   
    if(fishmod.hitcheck()||fishmod.treecheck()||fishmod.y>630){
      if(fishmod.hitcheck()){
        dogmod.hp=dogmod.hp-1;  
      }      
      fishmod.back();
      fishmod.gomove=0;
      fishmod.star=0;
      bonemod.star=1;

    } 
  }
  if(catmod.hp==0){
    screen.gamemode=2;
    screen.winner=1;
  }
  if(dogmod.hp==0){
    screen.gamemode=2;
    screen.winner=2;
  }
  //raf = window.requestAnimationFrame(draw);
  screen.choose_screen();
}
function star_screen(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(background,0,0,canvas.width, canvas.height);
  ctx.drawImage(title2,150,100,700, 200);
  ctx.drawImage(clicktostar,150,300,700, 200);
  screen.choose_screen();
}

function gameover_screen(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ctx.drawImage(background,0,0,canvas.width, canvas.height);  
  if(screen.winner==1){
    ctx.drawImage(dogwin,150,100,700,200);
  }
  if(screen.winner==2){
    ctx.drawImage(catwin,150,100,700,200);
  }
  ctx.drawImage(clicktostar,150,300,700, 200);
  screen.choose_screen();
}

canvas.addEventListener('pointerdown', function(e) {
  if(screen.gamemode==1){
    drag.origin_x=event.clientX;
    drag.origin_y=event.clientY;
  }
});

canvas.addEventListener('pointerup', function(e) {
  if(screen.gamemode==1){
    drag.next_x=event.clientX;
    drag.next_y=event.clientY; 
    if(bonemod.star==0&&fishmod.star==0&&fishmod.gomove==0&&bonemod.gomove==0){
      bonemod.star=1;
    }
    if(bonemod.star==1){
      bonemod.vx=(drag.origin_x-drag.next_x)/drag.distance()*10*(drag.distance()/300);
      bonemod.vy=(drag.origin_y-drag.next_y)/drag.distance()*14*(drag.distance()/300); 
      bonemod.gomove=1;
      bonemod.star=0;
    }
    if(fishmod.star==1){
      fishmod.vx=(drag.origin_x-drag.next_x)/drag.distance()*10*(drag.distance()/300);
      fishmod.vy=(drag.origin_y-drag.next_y)/drag.distance()*14*(drag.distance()/300); 
      fishmod.gomove=1;
      fishmod.star=0;
    }
  }
});
canvas.addEventListener('click', function(e) {
  if(screen.gamemode==0){
    screen.gamemode=1;
  }
  if(screen.gamemode==2){
    screen.gamemode=1;
    catmod.hp=5;
    dogmod.hp=5;
    bonemod.star=0;
    fishmod.star=0;
    fishmod.gomove=0;
    bonemod.gomove=0;
  }
});
/*
canvas.addEventListener('click', function(e) {
  console.log(event.clientX,event.clientY);
});
*/
raf = window.requestAnimationFrame(star_screen);

  