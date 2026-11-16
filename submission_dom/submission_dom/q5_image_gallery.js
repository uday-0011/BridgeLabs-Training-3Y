// Q5: Modal image preview. Images are sample remote images from picsum.photos.

const gallery = document.getElementById("gallery");
const imageModal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");
const closeModalButton = document.getElementById("closeModal");

gallery.addEventListener("click", function (event) {
    if (event.target.tagName !== "IMG") return;

    largeImage.src = event.target.src.replace("/300/200", "/1000/700");
    largeImage.alt = event.target.alt;
    imageModal.hidden = false;
});

imageModal.addEventListener("click", function () {
    imageModal.hidden = true;
});

// Prevent clicks inside the modal content from bubbling to the backdrop.
modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});

closeModalButton.addEventListener("click", function () {
    imageModal.hidden = true;
});
