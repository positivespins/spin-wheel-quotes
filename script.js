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
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "It’s going to be hard, but hard does not mean impossible.",
    "The key to success is to focus on goals, not obstacles.",
    "Believe in yourself and all that you are.",
    "Your limitation—it’s only your imagination.",
    "Opportunities don't happen. You create them.",
    "Discipline is doing what needs to be done, even if you don’t want to do it.",
    "You are capable of amazing things.",
    "If it doesn’t challenge you, it won’t change you.",
    "Failure is not the opposite of success; it’s part of success.",
    "Make today so awesome that yesterday gets jealous.",
    "Be fearless in the pursuit of what sets your soul on fire.",
    "Go the extra mile. It’s never crowded."
  ];

  const emojis = ["✨", "🚀", "🔥", "🌟", "💪", "🎯", "🌈", "🌻", "🧠", "🌞"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const personalizedQuote = `${emoji} ${name}, ${quotes[randomIndex]}`;

  // Animate + update quote
  quoteBox.classList.remove("animate");
  void quoteBox.offsetWidth; // trigger reflow
  quoteBox.textContent = personalizedQuote;
  quoteBox.classList.add("animate");

  // Confetti
  startConfetti();
  setTimeout(stopConfetti, 2000);
}
