//Instantiate GH class
const gh = new GH();

const searchuser = document.getElementById("searchUser");

searchuser.addEventListener("keyup", (e)=>{
  //get inpt text
  const userInput = e.target.value;
  if (userInput !== '') {
    //Make http call
    gh.getUser(userInput)
    .then(profile => {
      if (profile.profile.message === 'Not Found') {
        //show alert
      } else {
        //Show profile
      }
    })
  }
  
})