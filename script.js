document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.hero-images img');
    const indicators = document.querySelectorAll('.indicator');
    let index = 0;

    function showSlide(n) {
        images.forEach((img, i) => {
            img.style.transform = `translateX(${-n * 100}%)`;
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === n);
        });
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        showSlide(index);
    }

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Optional: Add event listeners for manual navigation if needed
   
   
});
