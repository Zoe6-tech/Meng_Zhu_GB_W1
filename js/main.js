// this is a self-invoking anonymous function
//also called an IIFE
//also called a module

(() => {
   //print('some message');
   console.log("some message - from JavaScript");

   //find the buttom element on the page by its ID with Javascript
   let theButtom = document.querySelector("#myButtom"),
       theHeading= document.querySelector('h1'),
       svgImage= document.querySelector("#svgGraphic");

   // this function changes the heading text
   function changeText(){
    theHeading.textContent = "Hello there from console";
   }

   //log the id of the svg to the console when a user hovers on it
  function logSVG(){
    console.log(this.id);
  }

    theButtom.addEventListener("click",changeText);
    svgImage.addEventListener("mouseover",logSVG);
    //document.querySelector('h1').textContent = "Hello there from console";
})();
