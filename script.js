
const quotes = [
  "Believe you can and you're halfway there.",
  "You are enough just as you are.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "Start where you are. Use what you have. Do what you can.",
  "Happiness is not by chance, but by choice.",
  "You're braver than you believe, and stronger than you seem.",
  "Do what you can, with what you have, where you are.",
  "Every day may not be good… but there's something good in every day.",
  "You miss 100% of the shots you don't take.",
  "Small steps every day lead to big results.",
  "Progress, not perfection.",
  "Let your light shine.",
  "You’ve got this!",
  "Stay positive, work hard, make it happen.",
  "The best view comes after the hardest climb.",
  "Don't wait for opportunity. Create it.",
  "Be a voice, not an echo.",
  "Radiate positivity.",
  "Good things take time.",
  "Your only limit is your mind."
];

function spinWheel() {
  const wheel = document.getElementById("wheel");
  const quoteBox = document.getElementById("quote");
  wheel.classList.add("spin");

  setTimeout(() => {
    wheel.classList.remove("spin");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.innerText = quotes[randomIndex];
  }, 2000);
}
