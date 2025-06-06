//REFRESH LOGO
function refreshPage() {
    location.reload(true);
}






document.addEventListener("DOMContentLoaded", () => {

    // BURGIR
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//TYPING ANIMATION
const typed = new Typed('.multiple-text', {
    strings: ['Video Editor', 'Graphic Designer', 'Programmer', 'Web Developer'],
    typeSpeed: 80,
    backSpeed:80,
    backDelay: 1200,
    loop: true,

});

// PROGRESS BAR ANIMATION
    const bars = document.querySelectorAll(".fill");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const bar = entry.target;
            const targetWidth = bar.getAttribute("data-width");

            if (entry.isIntersecting) {
                // Animate to full width
                bar.style.width = targetWidth;
            } else {
                // Reset to 0 when out of view
                bar.style.width = "0";
            }
        });
    }, {
        threshold: 0.3 // Trigger when about 30% is visible
    });

    bars.forEach(bar => {
        // Ensure bars start at 0 width
        bar.style.width = "0";
        observer.observe(bar);
    });
});



//CERTIFICATE MODAL


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".modal-close");
    const sliderImages = Array.from(document.querySelectorAll(".slider img"));
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentIndex = 0;
    const fadeDuration = 500;

    function openModal(index) {
        currentIndex = index;
        modalImg.src = sliderImages[currentIndex].src;
        modal.classList.add("show");
    }

    function closeModal() {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }

    function fadeTransition(newIndex) {
        modalImg.classList.add("fade-out");

        setTimeout(() => {
            currentIndex = newIndex;
            modalImg.src = sliderImages[currentIndex].src;
            modalImg.classList.remove("fade-out");
        }, fadeDuration);
    }

    function showNext() {
        let newIndex = (currentIndex + 1) % sliderImages.length;
        fadeTransition(newIndex);
    }

    function showPrev() {
        let newIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        fadeTransition(newIndex);
    }

    sliderImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";

            requestAnimationFrame(() => openModal(index));
        });
    });

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    rightArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        showNext();
    });

    leftArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        showPrev();
    });

    // KEYBOARD NAVIGATION
    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("show")) return;

        if (e.key === "ArrowRight") {
            showNext();
        } else if (e.key === "ArrowLeft") {
            showPrev();
        } else if (e.key === "Escape") {
            closeModal();
        }
    });
    const slider = document.querySelector(".slider");
    let scrollPosition = 0;
    const scrollSpeed = 0.3;

    function autoScrollSlider() {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= slider.scrollWidth - slider.clientWidth) {
            scrollPosition = 0; // LOOPER
        }
        slider.scrollLeft = scrollPosition;
        requestAnimationFrame(autoScrollSlider);
    }

    // AUTO SCROLL
    autoScrollSlider();

    // USER MANUAL SCROLL
    slider.addEventListener('mouseenter', () => cancelAnimationFrame(autoScrollSlider));
    slider.addEventListener('mouseleave', () => {
        requestAnimationFrame(autoScrollSlider);
    });
});

