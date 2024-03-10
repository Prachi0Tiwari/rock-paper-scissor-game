var you;
var yourscore=0;
var oponent;
var oponentscore=0;

var choices=["rock","paper","scissors"];

window.onload=function(){
    for(let i=0; i<3;i++){
        //<img id="rock" src="rock.png">
        let choice = document.createElement("img");
        choice.id=choices[i];
        choice.src=choices[i]+".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice);
    }
 }
 function selectChoice(){
    you=this.id;
    document.getElementById("your-choice").src=you+".png";
    
    oponent=choices[Math.floor(Math.random()*3)];
    document.getElementById("oponent-choice").src=oponent+".png";
    if(you==oponent){
        yourscore+=1;
        oponentscore+=1;
    }
    else {
        if(you=="rock"){
            if(oponent=="scissors"){
            oponentscore+=1;
        }
        else if(oponent=="paper"){
            oponentscore+=1;
        }
    }
        else if(you =="scissors"){
            if(oponent=="paper"){
            oponentscore+=1;
        }
        else if(oponent=="rock"){
            oponentscore+=1;
        }
    }
        else if(you=="paper"){
            if(oponent=="rock"){
            oponentscore+=1;
        }
        else if(oponent=="scissors"){
            oponentscore+=1;
        }
    }
    }
    document.getElementById("your-score").innertext=yourscore;
    document.getElementById("oponentscore").innertext=oponentscore;
}