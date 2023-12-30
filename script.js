var childd;
var i=0;
var x=0;
var y=0;
var xx=1;
var yy=1;
var interval;
function gotop(){
  var  check =document.getElementById("buto").value;
if(check =='start'){
    childd= window.open('child.html','','width=80,height =100');
    document.getElementById("buto").value = "stop";
    startInterval()
}
    else{
        childd.focus()
        clearInterval(interval);
        document.getElementById("buto").value = "start";
    }
    
}


function startInterval(){
interval = setInterval(function(){
if(y+yy>screen.availHeight -95||y +yy<0){
    // if(y>screen.availHeight||y<0){
yy=-yy
xx=-xx
}

else{
    x+=xx
    y+=yy
    console.log(yy)
}
childd.moveTo(x,y);
},0)    
        
    // interval = window.setInterval("movewin()",0);

}
// function movewin(){
//     childd.moveBy(x,y);
//     childd.focus();
//     console.log(y)
//     console.log(x)

// }
