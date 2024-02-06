(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs?.openModalBtn?.addEventListener("click", toggleModal);
    refs?.closeModalBtn?.addEventListener("click", toggleModal);
  
    function toggleModal() {
      // document.body.classList.toggle("modal-open")
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  // document.querySelector('.header .menu-button').addEventListener('click',function(target){
  //   let isOpen = !this.classList.contains('is-open');
  //   if(isOpen) {
  //     document.body.setAttribute('style','overflow:hidden;');
  //     return;
  //   }
  //   document.body.removeAttribute('style');  
  // });