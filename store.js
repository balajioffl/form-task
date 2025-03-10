
// storing data in local storage

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    validate();

    let errors = document.querySelectorAll(".alert");
    for (let error of errors) {
      if (error.textContent.trim() !== "") {
        return;
      }
    }

    const inviteEmails = [];
    document.querySelectorAll("#additional-email p").forEach((email) => {
      inviteEmails.push(email.textContent);
    });

    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let email = document.getElementById("email");
    let inviteEmail = inviteEmails;
    let password = document.getElementById("pwd");
    let confirmPassword = document.getElementById("re-pwd");
    let gender =
      document.querySelector('input[name="gender"]:checked')?.value || "";
    let birthday = document.getElementById("birthday");
    let phone = document.getElementById("phone"); 

    alert("Registration Successfull ! Data stored in Local Storage");

    let data = JSON.parse(localStorage.getItem("userData") || "[]");
    data.push({
      name: name.value,
      age: age.value,
      email: email.value,
      inviteEmail: inviteEmail,
      password: password.value,
      confirmPassword: confirmPassword.value,
      gender: gender,
      birthday: birthday.value,
      phone: phone.value,
    });

    let newMail = document.getElementById("additional-email");

    localStorage.setItem("userData", JSON.stringify(data));
    form.reset();
    newMail.innerHTML = '';
    
  });
});
