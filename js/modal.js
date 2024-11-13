(() => {
  const modals = {
    modal1: {
      openBtns: document.querySelectorAll("[data-modal-open='modal1']"),
      closeBtn: document.querySelector("[data-modal-close='modal1']"),
      modal: document.querySelector("[data-modal='modal1']"),
    },
    modal2: {
      openBtns: document.querySelectorAll("[data-modal-open='modal2']"),
      closeBtn: document.querySelector("[data-modal-close='modal2']"),
      modal: document.querySelector("[data-modal='modal2']"),
    },
    modal3: {
      openBtns: document.querySelectorAll("[data-modal-open='modal3']"),
      closeBtn: document.querySelector("[data-modal-close='modal3']"),
      modal: document.querySelector("[data-modal='modal3']"),
    },
  };

  Object.values(modals).forEach(({ openBtns, closeBtn, modal }) => {
    openBtns.forEach((btn) => {
      btn.addEventListener("click", () => toggleModal(modal));
    });

    closeBtn.addEventListener("click", () => toggleModal(modal));
  });

  function toggleModal(modal) {
    modal.classList.toggle("is-hidden");
  }
})();

// (() => {
//   const refs = {
//     openModalBtns: document.querySelectorAll("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtns.forEach((btn) => {
//     btn.addEventListener("click", toggleModal);
//   });

//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();
