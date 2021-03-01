(() => {
  const main = document.querySelector('#main');
  const rejection = document.querySelector('#rejection');
  const rejectionBack = document.querySelector('#rejection__back');
  const rejectButton = document.querySelector('#main__button--reject');
  const subscribeForm = document.querySelector('#subscribe__form');
  const subscribeEmail = document.querySelector('#subscribe__email');
  const subscribeSuccess = document.querySelector('#subscribe__success');
  const reasonMain = document.querySelector('#reason__main');
  const reasonSuccess = document.querySelector('#reason__success');
  const reasonToggles = document.querySelectorAll('.js-reason__input');

  function showRejection() {
    main.hidden = true;
    rejection.hidden = false;
  }

  function hideRejection() {
    rejection.hidden = true;
    main.hidden = false;
  }

  function checkEscPress(e) {
    if (e.key === "Escape") {
      hideRejection();

      document.removeEventListener("keydown", checkEscPress);
    }
  }

  rejectButton.addEventListener('click', () => {
    showRejection();

    document.addEventListener('keydown', checkEscPress);
  });

  rejectionBack.addEventListener('click', () => {
    hideRejection();
  });

  subscribeForm.addEventListener('submit', (e) => {
    const email = subscribeEmail.value.trim();
    
    if (email.length) {
      subscribeForm.hidden = true;
      subscribeSuccess.hidden = false;

      console.log(email);
    }

    e.preventDefault();
  });

  for (let i = 0; i < reasonToggles.length; i++) {
    let toggle = reasonToggles[i];
    toggle.addEventListener('change', () => {
      reasonMain.hidden = true;
      reasonSuccess.hidden = false;
      
      console.log(toggle.value);
    });
  }
})();
