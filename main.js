let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountain3=document.getElementById('mountain3');
let mountain4=document.getElementById('mountain4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');


window.onscroll = function(){
    let value=scrollY;
    stars.style.left      = value
    moon.style.top        = value*4   +"px";
    mountain3.style.top   = value*3   +"px";
    mountain4.style.top   = value*1.5 +"px";
    river.style.top       = value     +"px";
    boat.style.left       = value*3   +"px";

    if(scrollY >= 152){
        document.querySelector('.main').style.background='linear-gradient(#376281 , #10001f)';
    }
    else { 
        document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)';
      }
    
        
}