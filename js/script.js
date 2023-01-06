const homeImages = document.querySelectorAll("#homeImageSlider img");
function createImagesCarousel(images) {
    for (let i = 1; i < images.length; i++)
        images[i].style.display = "none";
    let i = 0;
    setInterval(function() {
        images[i].className = "fade-out-image";
        setTimeout(function() {
            images[i].style.display = "none";
            i = (i + 1) % images.length;
            images[i].className = "fade-in-image";
            images[i].style.display = "block";
        }, 1500); 
       
    }, 10000);  
}
createImagesCarousel(homeImages);
