const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success is what comes after you stop making excuses.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Work hard in silence. Let your success be your noise.",
  "Your limitation—it’s only your imagination.",
  "Push harder than yesterday if you want a different tomorrow.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "It always seems impossible until it’s done.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Believe in yourself and all that you are.",
  "The way to get started is to quit talking and begin doing.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Be so good they can’t ignore you.",
  "Opportunities don't happen. You create them.",
  "Do what you have to do until you can do what you want to do.",
  "I can and I will. Watch me.",
  "You are capable of amazing things.",
  "Stop doubting yourself. Work hard and make it happen.",
  "You are stronger than you think.",
  "You were born to be real, not perfect.",
  "You don’t find the happy life. You make it.",
  "Doubt kills more dreams than failure ever will.",
  "Stay focused, go after your dreams and keep moving toward your goals.",
  "Believe in your infinite potential.",
  "Your only limit is your mind.",
  "Discipline is doing what needs to be done, even if you don’t want to do it.",
  "Hustle in silence and let your success make the noise.",
  "If it doesn’t challenge you, it won’t change you.",
  "You’ve got what it takes, but it will take everything you’ve got.",
  "The difference between who you are and who you want to be is what you do.",
  "Act as if what you do makes a difference. It does.",
  "Go the extra mile. It’s never crowded.",
  "Make today so awesome that yesterday gets jealous.",
  "Success isn’t always about greatness. It’s about consistency.",
  "Be fearless in the pursuit of what sets your soul on fire.",
  "Difficult roads often lead to beautiful destinations.",
  "Don’t limit your challenges—challenge your limits.",
  "Failure is not the opposite of success; it’s part of success."
];

function spinWheel() {
  const quoteBox = document.getElementById("quote");
  const nameInput = document.getElementById("username").value.trim();

  if (!nameInput) {
    alert("Please enter your name first!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const personalizedQuote = `${nameInput}, ${quotes[randomIndex]}`;
  quoteBox.innerText = personalizedQuote;

  startConfetti();
  setTimeout(stopConfetti, 2000);
}
