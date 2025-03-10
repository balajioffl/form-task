document.addEventListener("DOMContentLoaded", function () {
  let tableBody = document.getElementById("bodylist");
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  function generateUserData() {
    tableBody.innerHTML = "";
    
    userData.forEach((user, index) => {
      let row = document.createElement("tr");

      let userName = document.createElement("td");
      userName.innerHTML = user.name;
      row.appendChild(userName);

      let age = document.createElement("td");
      age.textContent = user.age;
      row.appendChild(age);

      let email = document.createElement("td");
      email.textContent = user.email;
      row.appendChild(email);

      let invitedMail = document.createElement("td");
      invitedMail.textContent = user.inviteEmail
        ? user.inviteEmail.join(", ")
        : "None";
      row.appendChild(invitedMail);

      let password = document.createElement("td");
      password.textContent = user.password;
      row.appendChild(password);

      let role = document.createElement("td");
      role.textContent = user.gender;
      row.appendChild(role);

      let dob = document.createElement("td");
      dob.textContent = user.birthday;
      row.appendChild(dob);

      let phone = document.createElement("td");
      phone.textContent = user.phone;
      row.appendChild(phone);

      let deleteBtn = document.createElement("td");
      let icon = document.createElement("i");
      icon.className = "fa-solid fa-user-slash";
      icon.addEventListener("click", function () {
        row.remove();
        userData.splice(index, 1);
        localStorage.setItem("userData", JSON.stringify(userData));
      });

      deleteBtn.appendChild(icon);
      row.appendChild(deleteBtn);

      tableBody.appendChild(row);
    });
  }
  generateUserData();
});
