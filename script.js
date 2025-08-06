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
    "Go the extra mile. It’s never crowded.",
    "Small steps every day lead to big results.",
    "Winners are not people who never fail, but people who never quit.",
    "Your only limit is your mind.",
    "Be stronger than your excuses.",
    "Nothing changes if nothing changes.",
    "Success starts with self-discipline.",
    "Stay patient and trust your journey.",
    "The best view comes after the hardest climb.",
    "Don't limit your challenges—challenge your limits.",
    "You don’t have to be extreme, just consistent.",
    "It always seems impossible until it’s done.",
    "Fall seven times, stand up eight.",
    "Train your mind to see the good in everything.",
    "Every day is a fresh start.",
    "One day or day one—you decide.",
    "Strive for progress, not perfection.",
    "Don’t stop until you’re proud.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "If you get tired, learn to rest, not quit.",
    "Your future is created by what you do today.",
    "Consistency is what transforms average into excellence.",
    "You are your only competition.",
    "Hustle in silence. Let your success make the noise.",
    "You don’t find willpower—you create it.",
    "When you feel like quitting, think about why you started.",
    "Nothing worth having comes easy.",
    "Don't let fear stop you from greatness.",
    "No pressure, no diamonds.",
    "Your dreams are valid. Act like it.",
    "Results happen over time, not overnight.",
    "Start where you are. Use what you have. Do what you can.",
    "Success is not for the lazy.",
    "Be a warrior, not a worrier.",
    "You didn’t come this far to only come this far.",
    "Be proud of how hard you're trying.",
    "Every accomplishment starts with the decision to try.",
    "Progress is progress, no matter how small.",
    "You are your most valuable investment.",
    "Choose courage over comfort.",
    "You grow through what you go through.",
    "Be addicted to bettering yourself.",
    "Don’t downgrade your dream to fit your reality.",
    "Energy grows where focus goes.",
    "There is no elevator to success. Take the stairs.",
    "It’s never too late to be who you might’ve been.",
    "The secret to getting ahead is getting started.",
    "If not now, when?",
    "Everything you need is already inside you.",
    "Focus on your goals. Glow in your grind.",
    "Slay the day.",
    "Prove them wrong.",
    "Keep showing up.",
    "Action beats anxiety.",
    "Be the energy you want to attract.",
    "Stay focused and extra sparkly.",
    "Hard work beats talent when talent doesn’t work hard.",
    "You are one decision away from a completely different life.",
    "Confidence comes from discipline and training.",
    "Don’t fear failure. Fear being in the same place next year.",
    "Keep going, even when it gets tough.",
    "You control your destiny. Create it.",
    "The more you sweat in training, the less you bleed in battle.",
    "Every champion was once a beginner.",
    "Don't talk, just act. Don't say, just show. Don't promise, just prove.",
    "Success is a series of small wins.",
    "Fall in love with becoming the best version of yourself.",
    "Trust the process.",
    "Excuses make today easy but tomorrow hard.",
    "No one is coming to save you. This is your story to write.",
    "Be relentless.",
    "Discomfort is the currency of your dreams.",
    "Set goals. Smash them. Repeat.",
    "You got this. Now go get it.",
    "Doubt kills more dreams than failure ever will.",
    "Work hard in silence. Let success be your noise.",
    "You either suffer the pain of discipline or the pain of regret.",
    "You are not a product of your circumstances, but of your decisions.",
    "It's not about being the best. It's about being better than you were yesterday.",
    "Keep grinding. Your breakthrough is coming.",
    "One more rep. One more page. One more step.",
    "You are unstoppable. Period.",
    "Some people want it to happen. Others make it happen.",
    "Be obsessed with your own potential.",
    "Your comeback is always stronger than the setback."
  ];

  const emojis = ["✨", "🚀", "🔥", "🌟", "💪", "🎯", "🌈", "🌻", "🧠", "🌞"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const personalizedQuote = `${emoji} ${name}, ${quotes[randomIndex]}`;

  // Animate + update quote
  quoteBox.classList.remove("animate");
  void quoteBox.offsetWidth;
  quoteBox.textContent = personalizedQuote;
  quoteBox.classList.add("animate");

  // Confetti
  startConfetti();
  setTimeout(stopConfetti, 2000);

  // GA Event
  gtag('event', 'spin_button_clicked', {
    'event_category': 'engagement',
    'event_label': 'Quote Generated'
  });
}

function copyQuote() {
  const quoteText = document.getElementById("quote").textContent;
  if (!quoteText) return;

  navigator.clipboard.writeText(quoteText).then(() => {
    alert("Quote copied to clipboard!");
    gtag('event', 'quote_copied', {
      'event_category': 'interaction',
      'event_label': 'Copied to clipboard'
    });
  });
}

function shareQuote() {
  const quoteText = document.getElementById("quote").textContent;
  if (!quoteText) return;

  const whatsappURL = `https://wa.me/?text=${encodeURIComponent(quoteText)}`;
  window.open(whatsappURL, '_blank');

  gtag('event', 'quote_shared', {
    'event_category': 'interaction',
    'event_label': 'Shared via WhatsApp'
  });
}
