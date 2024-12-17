// const localUrl = "http://localhost:3000/users";

// fetch(localUrl)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Funktion för att hämta användardata från servern och visa det i gränssnittet

async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:3000/users");

    const users = await response.json();

    const userList = document.getElementById("user-list");

    const ul = document.createElement("ul");

    users.forEach((user) => {
      const li = document.createElement("li");

      li.style.color = user.color;
      li.textContent = `${user.firstName} ${user.lastName} (${user.username})`;

      ul.appendChild(li);
    });

    userList.appendChild(ul);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUsers);
