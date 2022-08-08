const contact = JSON.parse(sessionStorage.getItem('contact'));

let bienvenue = document.getElementById("bienvenue");
bienvenue.innerHTML= `
<h1> bienvenue <br> ${contact.nom2} ${contact.prenom2}</h1>`;