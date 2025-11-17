// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const emailElem = document.querySelector("ul");

for (let i = 0; i <= 10; i++){
    //const apiURL = "https://flynn.boolean.careers/exercises/api/random/mail";

    axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function(resp){
        const randomEmail = resp.data.response;
        emailElem.innerHTML += `<li>${randomEmail}`;
        console.log(randomEmail);
    })
}

//non funziona axios