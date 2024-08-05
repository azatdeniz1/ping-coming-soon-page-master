const label = document.querySelector(".email-con");
const email = document.querySelector(".email");
const button = document.querySelector(".button");
console.log(label);
button.addEventListener("click", (e) => {
  
  e.preventDefault();

  const problem=document.querySelector(".warning")
  if (problem) {
    problem.remove();
  }
  if (email.value === "") {
    const empty =
      '<p class= "warning" >Whoops! It looks like you forgot to add your email</p>';
    email.insertAdjacentHTML("afterend", empty);
    email.classList.add("redborder");
  }
  const split = email.value.split("@");
  console.log();
  if(email.value!==""){
    if ((split[0] === "") || split[1] !== "gmail.com") {
    console.log(email.value !== "");
    const wrong ='<p class= "warning" >Please provide a valid email address</p>';
    email.insertAdjacentHTML("afterend", wrong);
    email.classList.add("redborder");
  }
  }
  else{
    email.classList.remove("redborder");
  }
  
});
button.addEventListener('mousedown', () => {
  button.classList.add('clicked');
});

button.addEventListener('mouseup', () => {
  button.classList.remove('clicked');
});