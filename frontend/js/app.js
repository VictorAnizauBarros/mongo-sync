document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("insertForm");
  const messageDiv = document.getElementById("message");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (!name || !age) {
      showMessage("Preencha todos os campos!", "error");
      return;
    }

    try {
      const response = await fetch("http://localhost:2000/users/insert", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age }),
      });

      const result = await response.json();

      if (response.ok) {
        showMessage(
          `Usuário inserido com sucesso! ID: ${result.insertedId}`,
          "success"
        );
        form.reset();
      } else {
        throw new Error(result.error || "Erro ao inserir usuário.");
      }
    } catch (error) {
      showMessage(error.message, "error");
    }
  });

  function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type;
    setTimeout(() => {
      messageDiv.textContent = "";
      messageDiv.className = "";
    }, 3000);
  }
});
