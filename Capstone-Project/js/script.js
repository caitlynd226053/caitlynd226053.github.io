const images = document.querySelectorAll(" #homeImageSlider img");
let i=0;
function createImageCarousel(images){
setInterval(function(){
   if (i ==0){
    images[i].style.display = "fade-in-image";
   }else if(i==images.length){
    images[i-1].style.display = "fade-out-image";
    images[i].style.display = "fade-in-image";
    i=0;
   }
   else{
    images[i-1].style.display = "fade-out-image";
    images[i].style.display = "fade-in-image";
   }
   
   i++;

},2000);
