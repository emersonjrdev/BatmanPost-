const main = document.querySelector(".container");
const urlImg = "http://10.92.198.38:8080/";
let currentPage = 1;
const postsPerPage = 3;

async function getPersons(page = 1) {
  const response = await fetch(`http://10.92.198.38:8080/feed/posts?page=${page}&limit=${postsPerPage}`);
  const posts = await response.json();
  console.log(posts);
  return posts;
}

function cards(data) {
  main.innerHTML = ""; // Limpar posts antigos
  const arrayDatas = data.posts;
  if (arrayDatas.length === 0) {
    const message = document.createElement("p");
    message.className = "no-images-message";
    message.textContent = "Não há mais imagens para exibir.";
    main.appendChild(message);
    return;
  }
  arrayDatas.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="banner"><img src="${urlImg + element.imageUrl}" /></div>
      <div class="content">
        <div class="texts">
          <h3 class="name">${element.title}</h3>
          <h5 class="species">${element.content}</h5>
        </div>
      </div>
    `;
    main.appendChild(card);
  });
}


async function loadPage(page) {
  const data = await getPersons(page);
  cards(data);
}

document.getElementById("nextPage").addEventListener("click", () => {
  currentPage++;
  loadPage(currentPage);
});

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    loadPage(currentPage);
  }
});

// Carregar a primeira página ao iniciar
loadPage(currentPage);
