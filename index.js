let firstTeam = document.getElementById("team-1")
let secondTeam = document.getElementById("team-2")


let count1 = 0
let count2 = 0


//schreib nur eine functionn wo du parameter nutzt um mit daten zu arbeiten
function increment(team, points) {
   if(team === firstTeam){
    count1 =count1 + points
    console.log(count1)
    firstTeam.textContent = count1 
    
   }else{
    count2 +=points
    secondTeam.textContent=count2
    console.log(count2)
   }
    
}


// function incrementTwo(){
//  count1 +=2
//  firstTeam.textContent=count1
//  count2 +=2
//  secondTeam.textContent = count2

// }
// function incrementThree(){
//  count1 +=3
//  firstTeam.textContent=count1
//  count2 +=3
//  secondTeam.textContent= count2

// }