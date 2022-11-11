//==creating copyRight and date at the left side of footer =====
/*==Get the date from Date()in buiult fuction then find this year using today date. */
const today = new Date(); 
const thisYear =today.getFullYear();
/*==Fetch the footer region using div id ="man" Use queryselector. Then create the paragraph div where we will overwrite this copwright*/
 const man =document.querySelector("#myFooter"); 
 const paragraph =document.createElement('p');

/*append the paragraph to the div section under footer */

paragraph.innerHTML = ' &copy;' + thisYear + ' Tamiru Taye';  
 man.appendChild(paragraph);
 
 //====skill list====

 /* first list an array of skills */
const skill = ["Js", "HTML", "CSS","Autocad", "Matlab", "CNC", "Java", "Python", "Eclipse"];
/*then get sekill section and ul div from HTML using their id */
 const skillsSection = document.getElementById("skill");
 const skillslist = skillsSection.querySelector("ul");
 /*save these list of skills in one variable called s */
 for(let i=0;i<skill.length; i++){
  let s=skill[i]
  /*create li where we have put these lists and append them */
  const line =document.createElement('li');
  line.innerHTML =s;
  skillslist.appendChild(line);
 };
 //====contact section===
const messageForm = document.querySelector(".leave_Message");
messageForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  const nameForm=e.target.name.value;
  console.log(nameForm + "a");
  const emailForm=e.target.email.value;
  console.log(emailForm);
  const messageInput=e.target.message.value;
  console.log(messageInput);

//Display Message in List
const messageSection= document.querySelector("#message");
const messageList =messageSection.querySelector("ul");
const newMessage=document.createElement("li");
const removeButton=document.createElement("button");
// if hidden, show the "messages" section
if (messageSection.style.display === 'none') {
  messageSection.style.display = 'block'
}

//create the editButton using createElement
 const editButton = document.createElement("button");
//give name for editButton
editButton.innerHTML = "Edit";
//add eventListner (click....function())
editButton.addEventListener("click",function() {
  const Edit =editButton.parentNode;
  console.log(Edit);
  if(editButton.textContent === "Edit") {
    const span = Edit.childNodes[1];
    const input = document.createElement("input");
    console.log("test input:", input);
    input.type = "text";
    input.value = span.textContent;
    Edit.insertBefore(input, span);
    Edit.removeChild(span);
    editButton.textContent = "Save";
  } else if(editButton.textContent === "Save") {
    const input = Edit.childNodes[1];
    const span = document.createElement("span");
    span.textContent = input.value;
    Edit.insertBefore(span, input);
    Edit.removeChild(input);
    editButton.textContent = "Edit";
  }
});

//edit and save
removeButton.setAttribute("class", "removeBtn"); //To set attribute of the class to its value
const aTag = document.createElement("a");

aTag.href =""+ " mailto:" + emailForm +" ";
aTag.innerHTML = nameForm + "";
removeButton.innerText="remove";
removeButton.addEventListener("click",function() {
  // const entry=e.target.parentNode
  const entry =removeButton.parentNode
  entry.remove()
});

const spanElement=document.createElement("span");
spanElement.innerHTML= ''+' wrote:'+ messageInput;
newMessage.appendChild(aTag);
newMessage.appendChild(spanElement);
newMessage.appendChild(editButton);
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);

});

fetch('https://api.github.com/users/tamirulalan/repos')
  .then((response) => response.json())
  .then((data) =>{
     console.log(data);
    
        
    getProject(data)})
    
  
  const getProject=(data)=>{
  var projectSection =document.getElementById("project")
   var projectList = projectSection.querySelector("ul")
   const filteredData = data.filter((repo) =>
   repo.name.includes('intro-to-programming-cassiopeia')
 )
 for (let repository of filteredData) {
  const projectItem = document.createElement('li')
  projectItem.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a> :- is the potrtifolio I made during my study in Code The Dream created on ${today}`
  projectList.appendChild(projectItem)
  
   }
   }



    