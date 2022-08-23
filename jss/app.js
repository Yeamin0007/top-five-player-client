let Player=[]
function Selected(city, btn){
   

   const cityPlayers= document.getElementById(city).innerText;
   

   if(Player.length<5){
    Player.push(cityPlayers)
 const listContainer = document.getElementById('list-container')
 const li=document.createElement('li');
 li.innerText = cityPlayers
 listContainer.appendChild(li)

 const but= document.getElementById(btn);
    but.disabled = true
   }
   else{
    alert('You can not add more then 5 players.')
   }
   

}




//  claculate section------

document.getElementById('calculate-btn').addEventListener('click', function(){
  const list = document.getElementsByTagName('li');
  const players = list.length;

  const perPlayerCost = document.getElementById('calculate-field').value;
  const totalPlayerCost = players * perPlayerCost;
  document.getElementById('player-expenses').innerText = totalPlayerCost;


  const inputBudget = document.getElementById('calculate-field');
  inputBudget.value = ''; 


  const playerExpensesString = document.getElementById('player-expenses').innerText;
  const playerExpenses = parseFloat(playerExpensesString);



  document.getElementById('total-calculate').addEventListener('click', function(){
   const managerCost = document.getElementById('manager-field').value
   const coachCost = document.getElementById('coach-field').value


   const total = parseFloat(managerCost) + parseFloat(coachCost) + playerExpenses;
   document.getElementById('final-cost').innerText = total;

   const inputBudgetTotal = document.getElementById('manager-field');
   inputBudgetTotal.value = '';

   const inputCoachTotal = document.getElementById('coach-field');
   inputCoachTotal.value = '';
   
  })
})