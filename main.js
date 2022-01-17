//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età
const studente = {
    nome : 'Max',
    cognome : 'Verstappen',
    età : 24
};

//Stampare in console attraverso un ciclo for-in tutte le proprietà dell’oggetto
for(let key in studente){
    console.log(key);
    console.log(studente[key]);
};

//Creare un array di studenti
let studenti = [
    {
        nome : 'Pierre',
        cognome : 'Gasly',
        età : 25
    },
    {
        nome : 'Lance',
        cognome : 'Stroll',
        età : 25
    },
    {
         nome : 'Carlos',
         cognome : 'Sainz',
         età : 26
    },
];

//Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome
for(let i = 0; i < studenti.length; i++){
    let studenteCorrente = studenti[i];
    console.log('Nome: ' + studenteCorrente.nome);
    console.log('Cognome: ' + studenteCorrente.cognome);
}

//Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere nuovo oggetto 
//studente inserendo nell'ordine: nome, cognome, età
let nomeStudente = prompt("Inserisci nome studente: ");
let cognomeStudente = prompt("Inserisci cognome studente ");
let etaStudente = prompt ("Inserisci età studente: ");

//Aggiungere il nuovo studente all’array di studenti
studenti.push({
    nome : nomeStudente,
    cognome : cognomeStudente,
    età: etaStudente
});

//Ciclare su tutti gli studenti e stampare per ognuno di essi tutte le proprietà
for(let i = 0; i < studenti.length; i++){
    let studenteCorrente = studenti[i];
    console.log('Nome: ' + studenteCorrente.nome);
    console.log('Cognome: ' + studenteCorrente.cognome);
    console.log('Età: ' + studenteCorrente.età);
}
