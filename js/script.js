
// 1. prendo l'elemento in cui andrò a stampare l'array;
// 2. creo un array di oggetti;
// 3. Con l'utilizzo del ciclo for Each, stampo gli oggetti in pagina dopo aver aggiungo gli elementi una struttura card (img+txt);
// 4. introduco il contatore per tener traccia della posizione dell'immagine;
// 5. rimuovo la classe hide dalla prima immagine del carosello, aggiungo la classe active a all'immagine della thumb;
// 6. inserisco i bottoni;
// 7. creo le funzioni per il funzionamento del carosello;
// 8. attivo i bottoni con le funzioni create.



// 1.
const containerSlider = document.querySelector(".images");
const secondSlider = document.querySelector(".second-carousel");



// 2.
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




// 3.

imagesObj.forEach(card => {

  containerSlider.innerHTML += `

  <div class="card-sp w-100 h-100 hide item">
  <img src="${card.image}" class="w-100 h-100 object-fit-cover img-fluid">
  <p class="text text-white">${card.text}</p>
  </div>
  `;

  secondSlider.innerHTML += `<img src=${card.image} class="w-100 object-fit-cover h-20 thumb">`
  
});


 //4. 
let counter = 0;

//5. 

let imagesCollection = document.getElementsByClassName("item");
imagesCollection[counter].classList.remove("hide");
let thumbCollection = document.getElementsByClassName("thumb");
thumbCollection[counter].classList.add("active");

//6. 

const buttonTop = document.querySelector(".button-top");
const buttonBottom = document.querySelector(".button-bottom");
buttonTop.classList.add("hide");


// 8.

let interval;

buttonBottom.addEventListener("click", function(){
 clearInterval(interval);
 interval = setInterval(nextImage, 2000);

});

buttonTop.addEventListener("click", function(){
  
});







// ********** funzioni **********************

// 7.

function nextImage() {

  for(i = 0; i < thumbCollection.length; i++) {
    thumbCollection[counter + 1].classList.add("active");
    thumbCollection[i].classList.remove("active");
  }

    buttonTop.classList.remove("hide");
    imagesCollection[counter].classList.add("hide");
    counter++;
    if (counter === imagesCollection.length - 1) buttonBottom.classList.add("hide")
    imagesCollection[counter].classList.remove("hide");

}


function prevImage() {
  
  for(i = 0; i < thumbCollection.length; i++) {
    thumbCollection[counter - 1].classList.add("active");
    thumbCollection[i].classList.remove("active");
  }

  imagesCollection[counter].classList.add("hide");
  counter--;
  if (counter === 0) {
    buttonTop.classList.add("hide");
    buttonBottom.classList.remove("hide");
  }
  imagesCollection[counter].classList.remove("hide");
}



