const params = new URLSearchParams(window.location.search);
document.getElementById("receiver").innerText = params.get("receiver") || "Your Valentine";
document.getElementById("sender").innerText = params.get("sender") || "Anonymous";
document.getElementById("nickname").innerText = params.get("nickname") || "💖";
document.getElementById("letter1").innerText = params.get("letter1") || "Happy Valentine's Day!";
document.getElementById("letter2").innerText = params.get("letter2") || "";
document.getElementById("letter3").innerText = params.get("letter3") || "";

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.classList.add("heart");
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// Buttons
function yesClicked() {
  alert("YAY! 💖 Love you!");
}

function moveButton() {
  const button = document.querySelector(".no");
  button.style.top = Math.random() * 400 + "px";
  button.style.left = Math.random() * 400 + "px";
}
