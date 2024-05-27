const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const imageFile = document.getElementById("imageInput").files[0];

    const formData = new FormData();
    formData.append("title", "Emerson Jr");
    formData.append("content", "Verdazzo");
    formData.append("image", imageFile);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlyaW5ldUBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NjU0ZDBmMjM1ZjY3OTA4YTFiMzQyNDkiLCJpYXQiOjE3MTY4MzQ1NjIsImV4cCI6MTcxNjg0ODk2Mn0.juWAFzMMY4Hzofth23kXH2AN8QzPQ8HYtkwuZB19TAQ";

    fetch("http://10.92.198.38:8080/feed/post", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => console.log("Resposta do servidor:", data))
    .catch((error) => console.error("Erro ao enviar postagem:", error));
});
