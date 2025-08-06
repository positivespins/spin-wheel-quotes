function showQuote() {
  const name = document.getElementById("username").value.trim();
  const quoteBox = document.getElementById("quote");

  if (!name) {
    alert("Please enter your name");
    return;
  }

  const quotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Don’t watch the clock; do what it does. Keep going.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Believe in yourself and all that you are.",
    "Doubt kills more dreams than failure ever will.",
    "Difficult roads often lead to beautiful destinations."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteBox.textContent = `${name}, ${quotes[randomIndex]}`;
}
