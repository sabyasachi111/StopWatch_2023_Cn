//All variables declared for upgrading the timer 


let Hr=0;
let Min=0;
let Sec=0;
let Count=0;

//timer variable will be the flag for excution of calling function accroding to it's status value;
let timer=false;

/*Start function will change the value of timer to true which strat excuting the StopWatch() function. 
it will only excute when onclick event occurs by clicking the start button.*/ 

function Start(){
    timer=true;
    console.log(timer);
    Stopwatch();
}

/*Stop function will change the value of the timer to false hence the Stopwatch() function stops and the timer stops */
function Stop(){
  timer=false;
}

/*Reset Funvtion will reset the timer by updateing the value of each variable tp '00' */
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
   //if timer value is true then only it will excute the SetTimeout function.
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
    //to display the hr, min, sec, and count as double digit number variables are displayed as string instead int .
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
    /* setTimeout function will call the passed function every 10 mili sec untill the condition that timer=false*/
    setTimeout("Stopwatch()",10);
    
   }
}