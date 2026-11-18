// Q5: Image gallery modal. stopPropagation prevents inside clicks closing it.
const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const previewImage = document.getElementById("previewImage");
const closeModalButton = document.getElementById("closeModal");

gallery.addEventListener("click", (event) => {
  if (event.target.tagName !== "IMG") return;
  previewImage.src = event.target.src;
  previewImage.alt = event.target.alt;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  previewImage.src = "";
}

// Clicking the backdrop closes the preview.
modal.addEventListener("click", closeModal);

// Clicking the image area must not bubble to the backdrop.
modalContent.addEventListener("click", (event) => event.stopPropagation());
closeModalButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
