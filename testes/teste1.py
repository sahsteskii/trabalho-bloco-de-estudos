from pathlib import Path
from playwright.sync_api import sync_playwright

# 1. Sai da pasta 'testes', entra na pasta 'login' e pega o 'index.html'
caminho_arquivo = Path(__file__).resolve().parent.parent / "login" / "index.html"

# 2. Converte para o caminho de arquivo correto (file://...)
url_local = caminho_arquivo.as_uri()

with sync_playwright() as p:
    # Abre o navegador
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()

    # Acessa a sua página
    page.goto(url_local)

    # Preenche o e-mail
    page.fill("#email", "aluno@escola.pr.gov.br")

    # Clica no botão de entrar
    page.click(".btn-entrar")

    # Espera 3 segundos para você ver o resultado
    page.wait_for_timeout(3000)

    browser.close()