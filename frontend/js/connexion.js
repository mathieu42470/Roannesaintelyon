let ignorer = document.getElementById("ignorer");
ignorer.addEventListener ("click", (e) =>{
               e.preventDefault();
               document.location.href = "index.html";
})
let envoyer = document.getElementById("envoyer");
envoyer.addEventListener ("click", (e)=>{
               e.preventDefault();
               contact ={
                              prenom: document.getElementById("prenom").value,
                              nom: document.getElementById("mail").value,
                              mail: document.getElementById ("nom").value,
               }
               console.log("je suis la", contact);
               localStorage.setItem('contact', JSON.stringify(contact))

//                document.location.href = "index.html";
 })