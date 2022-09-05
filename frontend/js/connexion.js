
let ignorer = document.getElementById("ignorer");
ignorer.addEventListener ("click", (e) =>{
               e.preventDefault();
               data ={
                              prenom2 : document.getElementById ("prenom2").value,
                               nom2 : document.getElementById ("nom2").value,
               }
               console.log(data)
               sessionStorage.setItem('contact', JSON.stringify(data))
               document.location.href = "accueil.html";
})
let envoyer = document.getElementById("envoyer");
envoyer.addEventListener ("click", (e)=>{
               e.preventDefault();
             contact ={
                              prenom: document.getElementById ("prenom").value,
                              nom: document.getElementById ("nom").value,
                              email: document.getElementById("email"),
               }
           
               fetch('http://localhost:3000/api/newsletter/signup',{
                              method: 'post',
                              headers:{"Content-Type":"application/json"},
                              body: JSON.stringify(contact)
               }).then((data)=>data.json()).then((result)=>{
                 console.log(result)
               })
 })