const bots = [
  {
    naam: "🎫 Ticket Bot",
    prijs: "Gratis",
    beschrijving: "Eenvoudig ticketsysteem met knoppen en logs. Ideaal voor supportkanalen.",
    link: "https://discord.gg/XjZhuZNEHS"
  },
  {
    naam: "🎉 Giveaway Bot",
    prijs: "Gratis",
    beschrijving: "Start giveaways via slash commands, kies tijd, aantal winnaars en meer!",
    link: "https://discord.gg/XjZhuZNEHS"
  },
  {
    naam: "📈 Level Bot",
    prijs: "€5",
    beschrijving: "Gebruikers krijgen XP en stijgen in level op basis van activiteit. Optioneel leaderboard.",
    link: "https://discord.gg/XjZhuZNEHS"
  },
  {
    naam: "🤖 Custom Bot",
    prijs: "Vanaf €10",
    beschrijving: "Jij vraagt, ik bouw. 1 commando: €10–50 | 10+ commando’s: €100–200. Volledig op maat!",
    link: "https://discord.gg/XjZhuZNEHS"
  }
];

// Automatisch vullen
const container = document.getElementById("shop");
bots.forEach(bot => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h2>${bot.naam}</h2>
    <p>${bot.beschrijving}</p>
    <div class="price">💰 ${bot.prijs}</div>
    <a href="${bot.link}" class="discord">👥 Bestellen via Discord</a>
  `;
  container.appendChild(div);
});
