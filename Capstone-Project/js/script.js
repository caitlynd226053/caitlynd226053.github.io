const homeImages = document.querySelectorAll("#homeImageSlider img");
function createImagesCarousel(images) {
    // Hide all images except the first one
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
        }, 1500);  // Cut off the fade out animation .5 seconds early to prevent flickering
        // Make sure the fadeIn and fadeOut in CSS are 2 seconds (or 500 ms longer)
    }, 10000);  // Change image every 10 seconds
}
createImagesCarousel(homeImages);
