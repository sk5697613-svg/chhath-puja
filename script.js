const endDate = "15 November 2026 04:00 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) {
    return;
  }
  // convert into days, hours, minutes, seconds
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}

// Initial Call
clock();

setInterval(() => {
  clock();
}, 1000);

// === Sound Enable Logic ===
const video = document.getElementById("bgVideo");
const soundBtn = document.getElementById("enableSoundBtn");
const soundPrompt = document.getElementById("soundPrompt");

soundBtn.addEventListener("click", function () {
  // Jaise hi button par click hoga, video un-mute ho jayega aur gana sunai dega
  video.muted = false;
  video.play();

  // Sound button screen se gayab ho jayega
  soundPrompt.style.display = "none";
});
