document.addEventListener("DOMContentLoaded", () => {
    // Permite limpar o texto padrão "O QUE APRENDEU" quando o usuário clica para digitar
    const camposTexto = document.querySelectorAll(".conteudo");
  
    camposTexto.forEach((campo) => {
      campo.addEventListener("focus", () => {
        if (campo.innerText.trim() === "O QUE APRENDEU") {
          campo.innerText = "";
        }
      });
  
      campo.addEventListener("blur", () => {
        if (campo.innerText.trim() === "") {
          campo.innerText = "O QUE APRENDEU";
        }document.addEventListener("DOMContentLoaded", () => {
            // Ação ao clicar no botão do topo
            const btnTopo = document.getElementById("btn-topo");
          
            btnTopo.addEventListener("click", () => {
              alert("Botão do topo clicado!");
              window.location.href = "../calendario/index.html";
            });
          
            // Limpa o texto padrão ao focar para digitar
            const camposTexto = document.querySelectorAll(".conteudo");
          
            camposTexto.forEach((campo) => {
              campo.addEventListener("focus", () => {
                if (campo.innerText.trim() === "O QUE APRENDEU") {
                  campo.innerText = "";
                }
              });
          
              campo.addEventListener("blur", () => {
                if (campo.innerText.trim() === "") {
                  campo.innerText = "O QUE APRENDEU";
                }
              });
            });
          });
      });
    });
  });

  function navega (){
    window.location.href='../calendario/index.html'
  }