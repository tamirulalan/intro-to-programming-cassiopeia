const today = new Date();
const thisYear =today.getFullYear();
 const man =document.querySelector("#man");
 const paragraph =document.createElement('p');
 //paragraph.textContent =
 
paragraph.innerHTML = 'Copyright &copy;' + thisYear + ' Tamiru Taye';  
 man.appendChild(paragraph);
 

 //skill list
const skill = ["Autocad", "Matlab", "CNC", "Java", "Python", "Eclipse"];
 const skillsSection = document.getElementById("skill");
 const skillslist = skillsSection.querySelector("ul");
 for (const s of skill) {
  const line =document.createElement('li');
  line.innerHTML =s;
  skillslist.appendChild(line);
 };
const messageForm = document.querySelector(".leave_Message");
messageForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const nameForm=e.target.name.value;
  console.log(nameForm);
  const emailForm=e.target.email.value;
  console.log(emailForm);
  const messageInput=e.target.message.value;
  console.log(messageInput);

//Display Message in List
const messageSection= document.querySelector("#message");
const messageList =messageSection.querySelector("ul");
const newMessage=document.createElement("li");
const removeButton=document.createElement("button");

const aTag = document.createElement("a");

aTag.href = `mailto:${emailForm}`;
aTag.innerHTML = `${nameForm}`;
removeButton.innerText="remove";
removeButton.addEventListener("click",function() {
  // const entry=e.target.parentNode
  const entry =removeButton.parentNode
  entry.remove()
});
const spanElement=document.createElement("span");
spanElement.innerHTML=` wrote: ${messageInput} `;
newMessage.appendChild(aTag);
newMessage.appendChild(spanElement);
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

});


// newMessage.innerHTML=;


  