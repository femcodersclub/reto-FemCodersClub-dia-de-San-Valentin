function getRandomMessage() {
  const messages = [
    "Tu amor ilumina mis días más oscuros.",
    "En este día de amor y amistad, te envío mis mejores deseos. ¡Feliz San Valentín!",
    "Tu amistad es un regalo valioso. ¡Feliz Día de San Valentín!",
    "Que este día esté lleno de amor y alegría para ti¡Feliz San Valentin!",
    "Que este día esté lleno de afecto y buenos momentos. ¡Feliz San Valentín para ti!",
    "Gracias por ser una parte tan importante de mi mundo.",
    "Celebremos el amor en todas sus formas. ¡Feliz San Valentín a una persona increíble!",
    "En este día especial, quiero recordarte lo increíble que eres. ¡Feliz San Valentín!",
    "Que este día esté lleno de momentos especiales y cariño. ¡Feliz San Valentín para ti!",
    "Cada momento a tu lado es una aventura mágica. Feliz Día de San Valentín.",
    "¡Feliz Día de San Valentín! Que este día esté lleno de amor, amistad y felicidad.",
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
