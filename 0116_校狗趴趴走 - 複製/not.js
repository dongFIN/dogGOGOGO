

function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }
  
    catch(e){ return false;}
  
}

var FFF = 1;

  if(isMobile()){
      console.log(123)
      // if(FFF){
        document.location.href="phone.html";
        // FFF = 0;
      // }
  }







