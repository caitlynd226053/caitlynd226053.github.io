const images = document.querySelectorAll("img");
let i=0;
setInterval(function()){
  
   

   if (i ==0){
    images[i].style.display = 'block';
   }else if{
    images[i-1].style.display = 'none';
    images[i].style.display = 'block';
    i=0;
   }
   else{
    images[i-1].style.display = 'none';
    images[i].style.display = 'block';
   }
   
   i++;

},2000);
