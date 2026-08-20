document.addEventListener("DOMContentLoaded", () => {
  const camposTexto = document.querySelectorAll(".conteudo");

  // Recarrega o texto salvo anteriormente
  camposTexto.forEach((campo, index) => {
    const textoSalvo = localStorage.getItem(`estudo_${index}`);
    if (textoSalvo) {
      campo.innerText = textoSalvo;
    }

    // Limpa o texto padrão ao clicar se for o placeholder
    campo.addEventListener("focus", () => {
      if (campo.innerText.trim() === "O QUE APRENDEU") {
        campo.innerText = "";
      }
    });

    // SALVAMENTO AUTOMÁTICO AO DIGITAR:
    campo.addEventListener("input", () => {
      const texto = campo.innerText.trim();
      if (texto !== "" && texto !== "O QUE APRENDEU") {
        localStorage.setItem(`estudo_${index}`, texto);
      }
    });

    // Trata o evento de sair do campo (limpeza se ficar vazio)
    campo.addEventListener("blur", () => {
      const texto = campo.innerText.trim();
      if (texto === "") {
        campo.innerText = "O QUE APRENDEU";
        localStorage.removeItem(`estudo_${index}`);
      }
    });
  });
});

// Função acionada ao clicar no botão do topo (exportar/navegar)
function navega() {
  const cartão = document.querySelector(".card");

  // Tira o print do cartão
  html2canvas(cartão).then((canvas) => {
    // Cria o download da foto
    const link = document.createElement("a");
    link.download = "meus-estudos.png";
    link.href = canvas.toDataURL();
    link.click();

    // Mensagem de confirmação
    alert("Deu certo! Seu texto foi salvo e a imagem baixada.");

    // Redireciona para o calendário
    window.location.href = "../calendario/index.html";
  });
}