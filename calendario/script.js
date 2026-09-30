// Dados dos dias e matérias conforme a imagem
const dias = [
    { data: '20/02' },
    { data: '21/02' },
    { data: '22/02' },
    { data: '23/02' },
    { data: '24/02' },
    { data: '25/02' },
    { data: '25/02' },
    { data: '26/02' }
  ];
  
  const materias = ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'];
  
  // Função para renderizar os cartões na página
  function renderizarCartoes() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
  
    dias.forEach((dia, indexDia) => {
      // Cria a estrutura do cartão
      const card = document.createElement('div');
      card.className = 'card';
  
      // Cabeçalho com a data
      let htmlContent = `
        <div class="card-header">${dia.data}</div>
        <table class="card-table">
          <tbody>
      `;
  
      // Linhas das matérias com campos para escrever
      materias.forEach((materia, indexMat) => {
        htmlContent += `
          <tr>
            <td class="subject-name">${materia}</td>
            <td>
              <input 
                type="text" 
                class="note-input" 
                data-dia="${indexDia}" 
                data-materia="${indexMat}"
                placeholder=""
              />
            </td>
          </tr>
        `;
      });
  
      htmlContent += `
          </tbody>
        </table>
      `;
  
      card.innerHTML = htmlContent;
      container.appendChild(card);
    });
  }
  
  // Inicializar quando o documento carregar
  document.addEventListener('DOMContentLoaded', () => {
    renderizarCartoes();
  
    // Ação simples no menu hamburguer
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => {
      alert('Menu clicado!');
    });
  });