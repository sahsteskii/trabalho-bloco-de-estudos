// Estrutura padrão inicial (usada apenas na primeira vez que a página for aberta)
const diasPadrao = [
  { data: '20/02', materias: ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'] },
  { data: '21/02', materias: ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'] },
  { data: '22/02', materias: ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'] },
  { data: '23/02', materias: ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'] },
  { data: '24/02', materias: ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'] },
  { data: '25/02', materias: ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'] },
  { data: '25/02', materias: ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'] },
  { data: '26/02', materias: ['Mat', 'Port', 'BDD', 'CDD', 'Física', 'Bio'] }
];

// Carrega os dados salvos no localStorage ou usa o padrão inicial
let dias = JSON.parse(localStorage.getItem('meusDiasData')) || diasPadrao;
let anotacoes = JSON.parse(localStorage.getItem('minhasAnotacoesData')) || {};

// Função para renderizar os cartões na página
function renderizarCartoes() {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';

  dias.forEach((dia, indexDia) => {
    const card = document.createElement('div');
    card.className = 'card';

    let htmlContent = `
      <div class="card-header">${dia.data}</div>
      <table class="card-table">
        <tbody>
    `;

    dia.materias.forEach((materia, indexMat) => {
      // Busca o texto salvo para este campo específico (dia + matéria)
      const chaveAnotacao = `${indexDia}-${indexMat}`;
      const textoSalvo = anotacoes[chaveAnotacao] || '';

      htmlContent += `
        <tr>
          <td 
            class="subject-name" 
            onclick="alterarMateria(${indexDia}, ${indexMat})" 
            title="Clique para mudar o nome desta matéria neste dia"
            style="cursor: pointer;"
          >
            ${materia}
          </td>
          <td>
            <input 
              type="text" 
              class="note-input" 
              data-dia="${indexDia}" 
              data-materia="${indexMat}"
              value="${textoSalvo}"
              oninput="salvarTexto(${indexDia}, ${indexMat}, this.value)"
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

// Salva o texto digitado no campo de anotação automaticamente
function salvarTexto(indexDia, indexMat, texto) {
  const chave = `${indexDia}-${indexMat}`;
  anotacoes[chave] = texto;
  localStorage.setItem('minhasAnotacoesData', JSON.stringify(anotacoes));
}

// Altera a matéria e salva a nova lista no localStorage
function alterarMateria(indexDia, indexMat) {
  const materiaAtual = dias[indexDia].materias[indexMat];
  const novoNome = prompt('Digite o novo nome para esta matéria neste cartão:', materiaAtual);

  if (novoNome !== null && novoNome.trim() !== '') {
    dias[indexDia].materias[indexMat] = novoNome.trim();
    localStorage.setItem('meusDiasData', JSON.stringify(dias)); // Salva os nomes das matérias
    renderizarCartoes();
  }
}

// Inicializar quando o documento carregar
document.addEventListener('DOMContentLoaded', () => {
  renderizarCartoes();

  const menuBtn = document.getElementById('menuBtn');
  menuBtn.addEventListener('click', () => {
    alert('Menu clicado!');
  });
});