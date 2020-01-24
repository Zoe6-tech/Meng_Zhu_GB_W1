(()=>{
  //this is an IIFE ->also an implementation of the module pattern

  //always go and get the elements you are working with
  const mySpan=document.querySelector('main span'),
        myObject=document.querySelector('.svg-img');

  //fucntionityly gose here=>what we want to have happen
  function toggleSelection(){
    //we want to update our UI to make it look like
    //we are making a toggleSelection
    //debugger;
    // toggle class to the element with JS
    this.classList.toggle("selected");
    console.log(this.id);
  }

  //figure out what triggers will drive the functionality
  mySpan.addEventListener('click',toggleSelection);
  myObject.addEventListener('click',toggleSelection);
})()
