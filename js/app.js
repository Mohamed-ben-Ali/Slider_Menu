let allImages = Array.from(document.querySelectorAll(".item img"));
let lightBoxContainer = document.getElementById('lightBoxContainer');
let lightBox = document.querySelector("#lightBox");
let closeBtn = document.getElementById("closeBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let currentIndex;
closeBtn.addEventListener('click', close);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener('click', function (e) {
        lightBoxContainer.classList.replace('d-none', 'd-flex');
        let currentImg = e.target.getAttribute("src");
        currentIndex = allImages.indexOf(e.target)
        lightBox.style.backgroundImage = `url(${currentImg})`;
        console.log(currentIndex);
    })
}
function close() {
    lightBoxContainer.classList.replace('d-flex', 'd-none');
}
function nextSlide() {
    currentIndex++;
    console.log(allImages);
    if (currentIndex >= allImages.length) currentIndex = 0;
    let ImgURL = allImages[currentIndex].getAttribute("src");
    lightBox.style.backgroundImage = `url(${ImgURL})`;
}
function prevSlide() {
    currentIndex--;
    console.log(allImages);
    if (currentIndex < 0) currentIndex = allImages.length - 1;
    let ImgURL = allImages[currentIndex].getAttribute("src");
    lightBox.style.backgroundImage = `url(${ImgURL})`;

}

document.addEventListener('keyup', function (e) {
if (lightBoxContainer.classList.contains("d-flex")) {
    console.log(e);
    switch (e.key) {
        case 'ArrowRight':
            nextSlide();
            break;
        case 'ArrowLeft':
            prevSlide();
            break;
        case 'Escape':
            close();
            break
    }
}
})