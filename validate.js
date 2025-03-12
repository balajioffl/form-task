// create additional emails

let invite = document.getElementById("add");
let invite_email = document.getElementById("invite-email");
let inviteEmailError = document.getElementById("invite-email-error");

function addEmail(event) {
  if (invite_email.value.trim() === "") {
    inviteEmailError.textContent = "Email cannot be empty !";
    return;
  }

  let email_pattern =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  if (!email_pattern.test(invite_email.value.trim())) {
    inviteEmailError.textContent = "Please enter a valid email !";
    return;
  }

  let newMail = document.getElementById("additional-email");
  let add = document.createElement("p");
  add.textContent = invite_email.value;
  add.style.backgroundColor = "white";
  add.style.padding = "1rem";
  add.style.margin = "1rem 0";
  add.style.fontSize = "14px";
  add.style.borderRadius = "15px";
  add.style.fontWeight = "500px";
  add.style.width = "92%";
  newMail.appendChild(add);

  let del = document.createElement("i");
  del.className = "fa-solid fa-user-slash";
  del.style.marginLeft = "30px";
  del.style.fontSize = "20px";
  del.style.cursor = "pointer";
  add.appendChild(del);

  del.addEventListener("click", () => {
    add.remove();
    del.remove();
  });
  event.preventDefault();
}

invite.addEventListener("click", function (event) {
  addEmail(event);
  invite_email.value = "";
});

// validation the input field

function validate() {
  let name = document.getElementById("name");
  if (name.value.trim() == "") {
    document.getElementById("name-error").textContent =
      "Please enter valid name !";
    document.getElementById("name").style.border = "2px solid red";
  }

  let age = document.getElementById("age");
  let age_pattern = /^[1-9][0-9]?$/;
  if (!age_pattern.test(age.value.trim())) {
    document.getElementById("age-error").textContent =
      "Please enter valid age !";
    document.getElementById("age").style.border = "2px solid red";
  }

  let email = document.getElementById("email");
  let email_pattern =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  if (!email_pattern.test(email.value.trim())) {
    document.getElementById("email-error").textContent =
      "Please enter valid email !";
    document.getElementById("email").style.border = "2px solid red";
  }

  let passwd = document.getElementById("pwd");
  let confirmpwd = document.getElementById("re-pwd");
  if (passwd.value.trim() !== confirmpwd.value.trim()) {
    document.getElementById("pwd-error").textContent =
      "Passwords do not match !";
    passwd.style.border = "2px solid red";
    confirmpwd.style.border = "2px solid red";
    return;
  } 
  else {
    document.getElementById("pwd-error").textContent = "";
  }

  let dob = document.getElementById("name");
  if (dob.value.trim() == "") {
    document.getElementById("dob-error").textContent =
      "Please enter valid Date of Birth !";
    document.getElementById("name").style.border = "2px solid red";
  }
}
