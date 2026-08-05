const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
const btnGmail = document.getElementById('btnGmail');

// 1. Mude aqui para o domínio do e-mail da sua escola (sem o @)
const dominioEscola = "escola.pr.gov.br"; 

// Validação do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value.toLowerCase().trim();
    const dominioCompleto = `@${dominioEscola}`;

    if (email.endsWith(dominioCompleto)) {
        mensagem.style.color = "green";
        mensagem.textContent = "Acesso permitido! Redirecionando...";
        
        window.location.href = "../bloconotas/index.html";
        
    } else {
        mensagem.style.color = "red";
        mensagem.textContent = `Apenas e-mails terminados em ${dominioCompleto} são permitidos.`;
    }
});

