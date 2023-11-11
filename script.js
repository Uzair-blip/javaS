var score=0;//making it global so that it will change when function is called
var hit=0;
function increase() {
score+=10;
document.querySelector("#score").textContent=score

}

function makebubble() {
    
    var clutter=""
for(var i=0;i<=125;i++){
  var ran=Math.floor(Math.random()*10)//generate random number and store it on bubble h3
  
    clutter+= `<div id="bubble"><h3>${ran}</h3></div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runtimer() {
    
    var timer=60
   var timerchalao= setInterval(() => {
       if (timer>0) {
           timer--;
           document.querySelector("#timerval").textContent=timer;
        
       }
       else{
           document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`

           document.querySelector("#hitval").textContent=0
           
        clearInterval(timerchalao)
       }
    
    }, 1000);
}
function getnewhit() {
     hit=Math.floor(Math.random()*10)//rn is local vairable so we can not acces it othr than scope so we make it global
    document.querySelector("#hitval").textContent=hit;
}
document.querySelector("#pbtm").addEventListener("click",function(dets) {
var cmp=Number(dets.target.textContent)//target.textcontext gives us a string but we want number so thatwe can compare to hit so for this we use Number() 
    if (cmp===hit) {
        increase()
        makebubble()
        getnewhit()
    }
})
getnewhit()
runtimer();
makebubble();