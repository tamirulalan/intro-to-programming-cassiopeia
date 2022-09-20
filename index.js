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

    