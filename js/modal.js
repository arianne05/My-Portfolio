// Get the modals and buttons
var modal1 = document.getElementById("myModal1");
var openModalBtn1 = document.getElementById("openModalBtn1");
var closeModalBtn1 = document.getElementById("closeModalBtn1");

// Open Modal 1 when the "Open Modal 1" button is clicked
openModalBtn1.onclick = function() {
    modal1.style.display = "block";
}

// Close Modal 1 when the "Close" button (×) is clicked
closeModalBtn1.onclick = function() {
    modal1.style.display = "none";
}

var modal2 = document.getElementById("myModal2");
var openModalBtn2 = document.getElementById("openModalBtn2");
var closeModalBtn2 = document.getElementById("closeModalBtn2");

// Open Modal 2 when the "Open Modal 2" button is clicked
openModalBtn2.onclick = function() {
    modal2.style.display = "block";
}

// Close Modal 2 when the "Close" button (×) is clicked
closeModalBtn2.onclick = function() {
    modal2.style.display = "none";
}

var modal3 = document.getElementById("myModal3");
var openModalBtn3 = document.getElementById("openModalBtn3");
var closeModalBtn3 = document.getElementById("closeModalBtn3");

// Open Modal 3 when the "Open Modal 3" button is clicked
openModalBtn3.onclick = function() {
    modal3.style.display = "block";
}

// Close Modal 3 when the "Close" button (×) is clicked
closeModalBtn3.onclick = function() {
    modal3.style.display = "none";
}

var modal4 = document.getElementById("myModal4");
var openModalBtn4 = document.getElementById("openModalBtn4");
var closeModalBtn4 = document.getElementById("closeModalBtn4");

// Open Modal 4 when the "Open Modal 4" button is clicked
openModalBtn4.onclick = function() {
    modal4.style.display = "block";
}

// Close Modal 4 when the "Close" button (×) is clicked
closeModalBtn4.onclick = function() {
    modal4.style.display = "none";
}


// var modal5 = document.getElementById("myModal5");
// var openModalBtn5 = document.getElementById("openModalBtn5");
// var closeModalBtn5 = document.getElementById("closeModalBtn5");

// // Open Modal 5 when the "Open Modal 5" button is clicked
// openModalBtn5.onclick = function() {
//     modal5.style.display = "block";
// }

// // Close Modal 5 when the "Close" button (×) is clicked
// closeModalBtn5.onclick = function() {
//     modal5.style.display = "none";
// }

// Close Modals if the user clicks anywhere outside of them
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    // if (event.target == modal5) {
    //     modal5.style.display = "none";
    // }
}
