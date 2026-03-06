const lampSwitch = document.getElementById('lampSwitch');
  const lampBulb = document.getElementById('lampBulb');
  const loginForm = document.getElementById('loginForm');
  const lampStatus = document.getElementById('lampStatus');
  const successModal = document.getElementById('successModal');
  const modalEmail = document.getElementById('modalEmail');
  const errorToast = document.getElementById('errorToast');
  const toastMessage = document.getElementById('toastMessage');

  // Lamp switch logic
  lampSwitch.addEventListener('change', () => {
    if (lampSwitch.checked) {
      lampBulb.classList.add('on');
      loginForm.classList.add('show');
      lampStatus.textContent = "Lamp is ON - You can now log in";
      document.body.style.backgroundColor = "#333";
    } else {
      lampBulb.classList.remove('on');
      loginForm.classList.remove('show');
      lampStatus.textContent = "Lamp is OFF - Turn it on to access the form";
      document.body.style.backgroundColor = "#222";
    }
  });

  // Form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!lampSwitch.checked) {
      showToast("Turn on the lamp first!");
      return;
    }

    const email = document.getElementById('email').value;

    if (email) {
      modalEmail.textContent = "Logged in as: " + email;
      successModal.style.display = "flex";
    } else {
      showToast("Please enter your email.");
    }
  });

  // Close modal
  function closeModal() {
    successModal.style.display = "none";
  }

  // Toast notification
  function showToast(message) {
    toastMessage.textContent = message;
    errorToast.style.display = "block";

    setTimeout(() => {
      errorToast.style.display = "none";
    }, 3000);
  }