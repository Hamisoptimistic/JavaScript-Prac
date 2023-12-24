forrock =function(){
    const randomnum = Math.random()
    if(randomnum>= 0 && randomnum <=1/3){
        computermove = "rock"
    }else if(randomnum>=1/3&&randomnum<=2/3){
computermove = "paper"
        }
else{computermove="scissors"};

if(computermove==="rock"&&computermove!=="paper"&&computermove!=="scissors"){
    alert("tie computer picked rock")}
    else if(computermove!=="rock"&&computermove=="paper"&&computermove!=="scissors"){
        alert("you lose computer picked paper")
}
else{alert("you win computer picked scissors")}
    }


forpaper = function(){
    const randomnum = Math.random()
    if(randomnum>= 0 && randomnum <=1/3){
        computermove = "rock"
    }else if(randomnum>=1/3&&randomnum<=2/3){
computermove = "paper"
        }
else{computermove="scissors"};


if(computermove==="rock"&&computermove!=="paper"&&computermove!=="scissors"){
    alert("you won computer picked rock")}
    else if(computermove!=="rock"&&computermove=="paper"&&computermove!=="scissors"){
        alert("tie computer picked paper")
}
else{alert("you lose computer picked scissors")}
    }



forscissors = function(){
    const randomnum = Math.random()
    if(randomnum>= 0 && randomnum <=1/3){
        computermove = "rock"
    }else if(randomnum>=1/3&&randomnum<=2/3){
computermove = "paper"
        }
else{computermove="scissors"};

if(computermove==="rock"){
    alert("you lose computer picked rock")}
    else if(computermove=="paper"){
        alert("you won computer picked paper")
}
else{alert("tie computer picked scissors")}
    }


    