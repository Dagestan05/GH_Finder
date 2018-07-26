//Instantiate GH class
const gh = new GH();
// Init UI
const ui = new UI();

const searchuser = document.getElementById("searchUser");

searchuser.addEventListener("keyup", (e)=>{
  //get inpt text
  const userInput = e.target.value;
  if (userInput !== '') {
    //Make http call
    gh.getUser(userInput)
    .then(data => {
      if (data.profile.message === 'Not Found') {
        //show alert
      } else {
        //Show profile
        ui.showProfile(data.profile)
      }
    })
  }else{
    
  }
  
})