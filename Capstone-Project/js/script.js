const homeImages = document.querySelectorAll("#homeImageSlider img");
function createImageCarousel(images){
   console.log(images);
   let i =0;
setInterval(function(){
   if (i ==0){
    images[images.length-1].className = "fade-out-image";
      images[i].className = "fade-in-image";
   }else if(i==images.length){
    images[i-1].className = "fade-out-image";
    images[0].className = "fade-in-image";
    i=0;
   }
   else{
    images[i-1].className = "fade-out-image";
    images[i].className = "fade-in-image";
   }
   
   i++;

},10000);
}
createImageCarousel(homeImages);