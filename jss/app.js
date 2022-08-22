// document.getElementById('gundogan-btn').addEventListener('click', function(){
//     document.getElementById('gundogan-btn').disabled = true;
//     const playerName = document.getElementById('gundogan-name').innerText;
//     document.getElementById('one').innerText = playerName;
// })

//  function selectPlayer(btn, name){
//     btn.disabled = true;
//     const playerName = name.innerText;
//     document.getElementById('one').innerText = playerName;

// }
// const btn = document.getElementById('gundogan-btn');
// const name = document.getElementById('gundogan-name');
//  selectPlayer(btn, name)


let ARr=[]
function Selected(C){

   const AB= document.getElementById(C).innerText;

   if(ARr.length<5){
    ARr.push(AB)
 const listContainer = document.getElementById('list-container')
 const li=document.createElement('li');
 li.innerText=AB
 listContainer.appendChild(li)
   }
   else{
    alert('You can not add more then 5 players.')
   }

}




//  claculate section------

// document.getElementById('calculate-btn').addEventListener('click', function(){
//     const perPlayer = document.getElementById('calculate-feild');
//     const playerCost = perPlayer.value;

//     const perPlayerCost = document.getElementById('per-player-cost');
//     const perPlayerTotalCost = perPlayerCost.innerText;

// })