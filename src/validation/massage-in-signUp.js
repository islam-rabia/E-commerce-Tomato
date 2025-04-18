function handleMassageSignUp(firstName, lastName, email, password) {
  let SweetAlert = document.querySelector(".SweetAlert");
  let titleMassage = document.querySelector(".title-massage");

  if (
    firstName.value !== "" &&
    lastName.value !== "" &&
    email.value !== "" &&
    password.value !== ""
  ) {
    SweetAlert.classList.add("active");
    titleMassage.classList.add("active");
    titleMassage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" 
        height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" 
        stroke-linecap="round" stroke-linejoin="round" 
        data-lucide="circle-check" 
        class="lucide lucide-circle-check w-[22px]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
      <p class="text-[17px]">Form is valid</p>
    `;
    SweetAlert.style.backgroundColor = "#00bb53";

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
  } else {
    SweetAlert.classList.add("active");
    titleMassage.classList.add("active");
    titleMassage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24"
        height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" 
        stroke-linejoin="round" data-lucide="circle-x" 
        class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10">
        </circle><path d="m15 9-6 6"></path>
        <path d="m9 9 6 6"></path>
      </svg>
      <p class="text-[17px]">Please enter the data</p>
    `;
    SweetAlert.style.backgroundColor = "#f44336";
  }

  setTimeout(() => {
    SweetAlert.classList.remove("active");
    titleMassage.classList.remove("active");
  }, 1500);
}

export { handleMassageSignUp };
