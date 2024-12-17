// Funktion för att hämta användardata från servern och visa det i gränssnittet
async function fetchUsers() {
  try {
    // Skickar en GET-förfrågan till serverns endpoint "/users"
    const response = await fetch("http://localhost:3000/users");

    // Konverterar svaret från servern till JSON-format
    const users = await response.json();

    // Hämtar elementet med id "user-list" där användarlistan ska visas
    const userList = document.getElementById("user-list");

    // Skapar ett nytt <ul>-element för att hålla användarnas lista
    const ul = document.createElement("ul");

    // Itererar över varje användare i den hämtade datan
    users.forEach((user) => {
      // Skapar ett nytt <li>-element för varje användare
      const li = document.createElement("li");

      // Sätter färgen på texten beroende på användarens "color"-egenskap
      li.style.color = user.color;

      // Sätter textinnehållet för <li> med användarens förnamn, efternamn och användarnamn
      li.textContent = `${user.firstName} ${user.lastName} (${user.username})`;

      // Lägger till <li>-elementet i <ul>-elementet
      ul.appendChild(li);
    });

    // Lägger till den skapade <ul>-listan i "user-list"-elementet i DOM:en
    userList.appendChild(ul);
  } catch (error) {
    // Hanterar fel som kan uppstå vid hämtning av data och loggar det i konsolen
    console.error("Error fetching users:", error);
  }
}

// Kör fetchUsers-funktionen när sidan har laddats klart
document.addEventListener("DOMContentLoaded", fetchUsers);
