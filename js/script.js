// js-array-objects-carousel
// Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando gli oggetti. Alla slide aggiungere un titolo e un testo Bonus 1: Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

// Bonus 2: E se volessi un bottone per invertire la “direzione” del carosello?

// Bonus 3: Al click della thumb cambia l’immagine attiva

// Imposto un markup statico;
// Creo un array di oggetti con i dati forniti;
// Con l'utilizzo del ciclo for Each, stampo gli oggetti in pagina;



// 1. prendo l'elemento in cui andrò a stampare l'array 
const containerSlider = document.querySelector(".images");



// 2. creo un array di oggetti 

const imagesObj = [
  {
      image: "img/01.webp",
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];


// 2. Con l'utilizzo del ciclo for Each, stampo gli oggetti in pagina;

imagesObj.forEach(card => {

  containerSlider.innerHTML += `<img src="${card.image}" class="w-100 h-100 object-fit-cover img-fluid hide item">`

 
});


//3. rimuovo la classe hide dalla prima immagine 

let imagesCollection = document.getElementsByClassName("item");
imagesCollection[0].classList.remove("hide");

//4. inserisco i bottoni

const buttonTop = document.querySelector(".button-top");
const buttonBottom = document.querySelector(".button-bottom");
//  il bottoneTop di default è nascosto
buttonTop.classList.add("hide");

let counter = 0;

buttonBottom.addEventListener("click", nextImage);

buttonTop.addEventListener("click", prevImage);












// ********** funzioni **********************

function nextImage() {

  buttonTop.classList.remove("hide");

  imagesCollection[counter].classList.add("hide");

  counter++;

  if (counter === imagesCollection.length - 1) buttonBottom.classList.add("hide")

  imagesCollection[counter].classList.remove("hide");

}



function prevImage() {
  imagesCollection[counter].classList.add("hide");
       // decremento il contatore 
  counter--;
  
  if (counter === 0) {
    buttonTop.classList.add("hide");
    buttonBottom.classList.remove("hide");
  }
  imagesCollection[counter].classList.remove("hide");
}




