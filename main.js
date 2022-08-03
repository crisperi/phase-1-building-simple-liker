// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const clicked = document.querySelectorAll(".like-glyph");

const fullClickedHeart = document.querySelectorAll(".activated-heart");



function getFullHeart() {
  clicked.innerHTML = FULL_HEART;
  clicked.className = "activated-heart";
}



async function toFullHeart() {

//this is a different method to complete the same 
  // try{
  //   let k=await mimicServerCall()
  //   console.log(k)
  // }catch(e){
  //   console.log(e)
  // }

  for (var i = 0; i < clicked.length; i++) {
    clicked[i].addEventListener("click", function (click) {

      
      mimicServerCall().then((response) => {
        
       // console.log(response);
        
      
        if(this.innerHTML === EMPTY_HEART  ){
          this.innerHTML = FULL_HEART;
        this.classList.add('activated-heart')
        
       } else{
        this.innerHTML= EMPTY_HEART;
        this.classList.remove('activated-heart')
        this.classList.add('like-glyph')
       
      }

      

      }).catch(e => {
        console.log(e);
        showMessage();

        setTimeout(() => {
          const hideModal = document.getElementById("modal");
          hideModal.style.display = "none ";
        }, 1000)

      })
    
    
  }
    )}


}





      function showMessage() {
        errMessage = document.getElementById("modal");
        errMessage.removeAttribute("hidden");

      }
    
    
      toFullHeart();



      //------------------------------------------------------------------------------
      // Don't change the code below: this function mocks the server response
      //------------------------------------------------------------------------------

      function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            let isRandomFailure = Math.random() < .2
            if (isRandomFailure) {
              reject("Random server error. Try again.");
            } else {
              resolve("Pretend remote server notified of action!");
            }
          }, 300);
        });
      }