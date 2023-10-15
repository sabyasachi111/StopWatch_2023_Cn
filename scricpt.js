let Hr=0;
let Min=0;
let Sec=0;
let Count=0;

let timer=false;

function Start(){
    timer=true;
    console.log(timer);
    Stopwatch();
}

function Stop(){
  timer=false;
}

function Reset(){
   timer=false;
   var Hr="00";
   var Min="00";
   var Sec="00";
   var Count="00";
   document.getElementById("count").innerHTML=Count;
   document.getElementById("sec").innerHTML=Sec;
   document.getElementById("min").innerHTML=Min;
   document.getElementById("hr").innerHTML=Hr;
   
}

function Stopwatch(){
   if(timer==true){
    Count=Count+1;
    if(Count==100){
        Sec=Sec+1;
        Count=0;
    }
    if(Sec==60){
        Min=Min+1;
        Sec=0;
        Count=0;
    }
    if(Min==60){
        Hr=Hr+1;
        Min=0;
        Sec=0;
        Count=0;
    }
    var CountStr=Count;
    var SecStr=Sec;
    var MinStr=Min;
    var HrStr=Hr;
    if(Count<10){
         CountStr="0"+CountStr;
    }
    if(Sec<10){
        SecStr="0"+SecStr;
    }
    if(Min<10){
        MinStr="0"+MinStr;
    }
    if(Hr<10){
        HrStr="0"+HrStr;
    }
    
    document.getElementById("count").innerHTML=CountStr;
    document.getElementById("sec").innerHTML=SecStr;
    document.getElementById("min").innerHTML=MinStr;
    document.getElementById("hr").innerHTML=HrStr;
    setTimeout("Stopwatch()",10);
    
   }
}