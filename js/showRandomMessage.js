// Necesito más mensajes
function getRandomMessage() {
  const messages = [
    "Eres especial y único/a en mi vida.",
    "Tu amor ilumina mis días más oscuros.",
    "Aprecio cada momento que compartimos juntos/as.",
    "Tu amistad es un regalo que atesoro.",
    "Que este día esté lleno de amor y alegría para ti.",
    "Gracias por ser una parte tan importante de mi mundo.",
    "Celebremos el amor y la amistad en todas sus formas.",
  ];

  const storedMessages =
    JSON.parse(sessionStorage.getItem("storedMessages")) || [];

  const availableMessages = messages.filter(
    (message) => !storedMessages.includes(message)
  );

  if (availableMessages.length === 0) {
    sessionStorage.removeItem("storedMessages");
    return getRandomMessage();
  }

  const randomIndex = Math.floor(Math.random() * availableMessages.length);
  const randomMessage = availableMessages[randomIndex];

  storedMessages.push(randomMessage);
  sessionStorage.setItem("storedMessages", JSON.stringify(storedMessages));

  return randomMessage;
}

document.addEventListener("DOMContentLoaded", function () {
  const randomMessageDiv = document.getElementById("randomMessage");
  if (randomMessageDiv) {
    randomMessageDiv.innerText = getRandomMessage();
  }
});

