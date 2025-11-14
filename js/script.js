// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.



for (let i = 0; i <= 10; i++){
    const apiURL = "https://flynn.boolean.careers/exercises/api/random/mail";

    axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function(resp){
        const randomEmail = resp.data.response;
    
    })
}