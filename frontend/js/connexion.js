
let ignorer = document.getElementById("ignorer");
ignorer.addEventListener ("click", (e) =>{
               e.preventDefault();
               data ={
                              prenom2 : document.getElementById ("prenom2").value,
                               nom2 : document.getElementById ("nom2").value,
               }
               console.log(data)
               sessionStorage.setItem('contact', JSON.stringify(data))
               document.location.href = "index.html";
})
let envoyer = document.getElementById("envoyer");
envoyer.addEventListener ("click", (e)=>{
               e.preventDefault();
                 contact ={
                              prenom: document.getElementById ("prenom").value,
                              nom: document.getElementById ("nom").value,
                              email: document.getElementById ("email").value,
               }
               let regExMail = (value) =>{
                return /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/.test(value);
             }
             
               function mailControle(){
                let mail = contact.email;
                if (regExMail(mail)){
                   return true;
                }else{
                   alert("le mail n'est pas valide");
                   return false;
                }}
               fetch('http://localhost:3000/api/newsletter/signup',{
                              method: 'post',
                              headers:{"Content-Type":"application/json"},
                              body: JSON.stringify(contact, mailControle)
               }).then((data)=>data.json()).then((result)=>{
                 console.log(result)
               })
 })