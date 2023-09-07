document.addEventListener("DOMContentLoaded", function() {
    const meImage = document.getElementById("meImage");
    const aiMeImage = document.getElementById("aiMeImage");

    function toggleImages() {
        if (meImage.style.opacity === "1") {
            meImage.style.opacity = "0";
            aiMeImage.style.opacity = "1";
        } else {
            meImage.style.opacity = "1";
            aiMeImage.style.opacity = "0";
        }
    }

    setInterval(toggleImages, 10000); // Toggle images every 2 seconds (2000 milliseconds)
});