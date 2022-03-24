/* Il programma dovrà chiedere all'utente
 il numero di chilometri che vuole percorrere
  e l'età del passeggero.
 Sulla base di queste informazioni
  dovrà calcolare il prezzo totale del viaggio,
   secondo queste regole:
   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65.
  L'output del prezzo finale va scritto in forma umana
  (con massimo due decimali,
     per indicare centesimi sul prezzo). */


// Chiedere all'utente il numero di Km che vuole percorrere e la sua età

const km_to_do = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

// Alert se si inseriscono valori che non siano numeri
if (isNaN(`${km_to_do}`)) {
    alert('Attenzione: immettere unicamente valori numerici')
}

const passenger_age = parseInt(prompt('Quanti anni hai?'));

// Alert se si inseriscono valori che non siano numeri 
if (isNaN(`${passenger_age}`)) {
    alert('Attenzione: immettere unicamente valori numerici')
}

console.log(km_to_do, passenger_age);

// Calcolare prezzo totale del viaggio

const trip_cost = km_to_do * 0.21

console.log(trip_cost);

// Applicare sconto per minorenni del 20% e per ultra65 del 40%

const discount_under = trip_cost * 0.20;
const discount_above = trip_cost * 0.40;
const price_under = trip_cost - discount_under;
const price_above = trip_cost - discount_above;

let info;

if (passenger_age < 18) {
    console.log(discount_under);
    alert("Hai diritto allo sconto giovane Skywalker")
    console.log(trip_cost - discount_under)
    info = `Prezzo del biglietto con sconto del 20%: ${price_under.toPrecision(3)}`
} else if (passenger_age > 65) {
    console.log(discount_above);
    alert("Hai diritto allo sconto saggio Yoda")
    console.log(trip_cost - discount_above)
    info = `Prezzo del biglietto con sconto del 40%: ${price_above.toPrecision(3)}`
} else {
    console.log(trip_cost);
    alert("Per te vale il prezzo pieno Stormtrooper!")
    info = `Prezzo del biglietto a prezzo pieno: ${trip_cost.toPrecision(3)}`
}

//Stampare risultato a schermo 

const ticket = document.getElementById('ticket').innerHTML = info;