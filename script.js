const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "It’s going to be hard, but hard does not mean impossible.",
  "The key to success is to focus on goals, not obstacles."
];

function showQuote() {
  const name = document.getElementById("username").value.trim();
  const quoteBox = document.getElementById("quote");

  if (!name) {
    alert("Please enter your name");
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const personalizedQuote = `${name}, ${quotes[randomIndex]}`;
  quoteBox.textContent = personalizedQuote;
}
