const catalog = document.querySelector(".catalog");
const sections = document.querySelectorAll(".page-section");
const backButtons = document.querySelectorAll(".back");

function openSection(id) {
  sections.forEach(section => {
    section.classList.toggle("active", section.id === id);
  });

  catalog.style.display = "none";
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

document.querySelectorAll(".catalog-item").forEach(button => {
  button.addEventListener("click", () => {
    openSection(button.dataset.section);
  });
});

backButtons.forEach(button => {
  button.addEventListener("click", () => {
    sections.forEach(section => section.classList.remove("active"));
    catalog.style.display = "grid";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Hidden surprise
const secretButton = document.getElementById("secretButton");
const secret = document.getElementById("secret");

secretButton.addEventListener("click", () => {
  secret.classList.toggle("show");
  secretButton.textContent = secret.classList.contains("show")
    ? "okay you found it"
    : "there might be something here";
});

// Photo viewer
const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".photo-card").forEach(card => {
  card.addEventListener("click", () => {
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title;
    modalCaption.textContent =
      `${card.dataset.title} — ${card.dataset.caption}`;
    modal.classList.add("show");
  });
});

function closePhotoModal() {
  modal.classList.remove("show");
  modalImage.src = "";
}

closeModal.addEventListener("click", closePhotoModal);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closePhotoModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePhotoModal();
  }
});
