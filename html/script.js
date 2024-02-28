/*let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();

}, 5000 )

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);

// Defina intervalo para trocar automaticamente os slides
setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos*/

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}
