// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
/*
const clicked = document.getElementsByClassName("like-glyph");

function changeHeart(){

  for (var i =0 ; i < clicked.length; i++ ) {
    clicked[i].addEventListener ("click", toFullHeart , false )
    console.log(changeHeart)

  }
 
}

function toFullHeart() {
  for ( var i =0;i<clicked.length; i++){
    clicked[i] = FULL_HEART ;
    
  }
}
changeHeart(mimicServerCall());
*/

const clicked = document.querySelectorAll(".like-glyph");
console.log(clicked);



function toFullHeart (){
for (var i = 0 ; i< clicked.length; i++){
  clicked[i].addEventListener ("click", function(){
     this.innerHTML = FULL_HEART;
   
  })
  clicked[i].addEventListener ("click", function(){
    this.className = "activated-heart"; 
  })

}

}

/*function toFullHeart (){
  for (var i =0 ; i< clicked.length; i++){
    clicked[i].onC
  
  }
*/




mimicServerCall();
toFullHeart();

fetch ('http://127.0.0.1:5500/intro-js/mine/phase-1-building-simple-liker/index.html')
.then (function(response){
  return response.json();

})
.then(function(object){
  console.log(object);
})
.catch(function(error){
 errMessage= document.getElementById("modal");
 errMessage.removeAttribute("hidden");
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


