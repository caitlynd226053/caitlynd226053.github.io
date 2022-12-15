const images = document.querySelectorAll("img");
let i=0;
setInterval(function()){
   images.ForEach( (img, i) => {
    img.style.display ='none';

   })

   if (i == images.length){
    i =0;
   }
   images[i].style.display = 'block';
   i++;
},2000);
