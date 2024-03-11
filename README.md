# Progetto JavaScript Basics di Joseph La Luna
Link al progetto: https://jojohve.github.io/Counter-Js/


1.  Preparazione dell'applicazione
2.  Animazione e styling
3.  Risultato ed "easter-egg"
 

1 - Preparazione dell'applicazione

Ho iniziato il progetto creando il file HTML contenente i due ".div" principali; il primo contiene tutte le gif presenti per animare il progetto e il secondo invece contiene i bottoni per aumentare e diminuire il counter, con relativa visualizzazione del counter stesso. Il secondo div è stato aggiunto di button e label dinamicamente tramite Javascript.
Poi sono passato al file Js dove ho dichiarato tutti gli elementi presenti nel file HTML tramite variabili e costanti, dopo ho proceduto con il funzionamento dei bottoni che restituiscono già il valore modificato presente nella funzione risultato().

2 - Animazione e styling

Dopodichè ho proceduto con la creazione delle animazioni tramite l'uso di Photoshop per creare l'animazione di base, l'animazione di quando si preme il bottone "-", e di quando si preme il bottone "+". Sono state create animazioni molto basilari di 3/4 frame per ciascuna di esse. Nel file style.css invece ci sono oltre agli stili utilizzati, anche delle classi che ho inserito per far in modo che all'apertura della pagina sia visibile solo l'animazione di base, mentre le altre due sono "nascoste" ed attivate al momento della pressione dei bottoni specifici.  

3 - Risultato ed "easter-egg"

Infine ci sono alcuni "easter-egg", ovvero al raggiungimento di alcune cifre del counter si ricevono messaggi personalizzati. Il funzionamento è molto semplice, il counter prende spunto dal famoso consiglio della nonna di contare le pecore ad occhi chiusi se non si riesce a dormire, e in base a questo la pecora conta le staccionate saltate al momento della pressione del bottone "+", mentre si arrabbierà se viene interrotto il conto premendo il bottone "-".

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e807567-5119-4d62-bef9-5aefecaff481/deploy-status)](https://app.netlify.com/sites/sage-pika-37fa90/deploys)
