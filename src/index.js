function checkGender(){
let gender =prompt("What is your gender please?");
gender = gender .toLowerCase();
// reassigned gender 
if (gender =="female"){
    alert(`You are a ${gender}`);
}
  
else if(gender== "male"){
    alert(`You are a ${gender}`)
}
else{
    alert(`invalid input`)
}
}


checkGender()