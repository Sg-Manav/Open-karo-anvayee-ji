// 💖 DAY COUNTER
document.addEventListener("DOMContentLoaded", () => {
  const startDate = new Date("2025-09-01");
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const daySpan = document.getElementById("days");
  if (daySpan) daySpan.innerText = diffDays;
});

// 😈 NO button mind games
let noClicks = 0;
let yesScale = 1;

const noMessages = [
  "Are you sure? 😳",
  "Really?? 🥺",
  "Try again 😏"
];

function handleNoClick() {
  const noBtn = document.querySelector(".no-button");
  const yesBtn = document.querySelector(".yes-button");

  // First click → dodge
  if (noClicks === 0) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Change text (max 3)
  if (noClicks < noMessages.length) {
    noBtn.innerText = noMessages[noClicks];
  }

  // YES grows every time
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  noClicks++;
}

// 💖 YES button
function handleYesClick() {
  window.location.href = "yes_page.html";
}