const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slides = document.querySelectorAll('.slide');

let index = 0;
display(index);
function display(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'flex';
}

function nextSlide() {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    display(index);
}
function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    display(index);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



const readMoreBtn = document.querySelector(".btn-learn-more");
const text = document.querySelector(".col-lg-6 pt-4 pt-lg-0");

readMoreBtn.addEventListener("click", (e) => {
    text.classList.toggle("show-more");
    if (readMoreBtn.innerText === "Read More") {
        readMoreBtn.innerText = "Read Less";
    } else {
        readMoreBtn.innerText = "Read More";
    }
});


// document.addEventListener('DOMContentLoaded', () => {
//     const expandMore = document.querySelectorAll("[expand-More]")

//     function expand() {
//         const showContent = document.getElementById(this.dataset.target)
//         if (showContent.classList.contains('expand-active')) {
//             this.innerHTML = this.dataset.showtext
//         } else {
//             this.innerHTML = this.hidetext
//         }
//         showContent.classList.toggle('expand-active')
//     }

//     expandsMore.forEach(expandMore => {
//         expandMore.addEventListener('click', expand)
//     })
// })