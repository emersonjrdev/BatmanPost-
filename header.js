const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const imageFile = document.getElementById("imageInput").files[0];

    const formData = new FormData();
    formData.append("title", "Emerson Jr");
    formData.append("content", "Irineu");
    formData.append("image", imageFile);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1ZXZpc2Jyb256ZUBob3RtYWlsLmNvbSIsInVzZXJJZCI6IjY2NDI1ZWIwZWZlZWY4MGU4MjU2NGU2YyIsImlhdCI6MTcxNTcwNTcxNywiZXhwIjoxNzE1NzIwMTE3fQ.TM4sZJ_3yFn5yoSMnADUgL4Ah0IKbne3gIIkjTqMlnk";

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
