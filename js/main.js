document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      const nameInput = document.getElementById("name");
      const name = nameInput.value;

      const regex = /^[\p{L}\s]+$/u;

      if (!regex.test(name)) {
        document.getElementById("nameError").style.display = "block";
        event.preventDefault();
      } else {
        document.getElementById("nameError").style.display = "none";

        const randomMessage = getRandomMessage();
        sessionStorage.setItem("randomMessage", randomMessage);
        window.location.href = "html/message.html";
      }
    });
});
