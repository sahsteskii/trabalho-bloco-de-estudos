import os
from datetime import datetime
from playwright.sync_api import sync_playwright

def rodar_teste():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        caminho_base = os.path.dirname(os.path.abspath(__file__))
        caminho_html = os.path.abspath(os.path.join(caminho_base, "..", "bloconotas", "index.html"))
        page.goto(f"file://{caminho_html}")

        # 1. Seleciona o primeiro campo de texto (MAT)
        primeiro_campo = page.locator(".conteudo").first

        # 2. Clica, limpa o "O QUE APRENDEU" e digita o seu texto
        primeiro_campo.click()
        page.evaluate("document.querySelectorAll('.conteudo')[0].innerText = ''")
        
        texto_para_digitar = "SAMARA E ISA"
        primeiro_campo.fill(texto_para_digitar)

        # 3. Clica no título para desfocar (blur) e acionar a gravação no script.js
        page.locator("h1#data-titulo").click()
        page.wait_for_timeout(300) # Pausa rápida para a tela atualizar

        # 4. Gera a imagem com data/hora
        agora = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        nome_arquivo = f"print_{agora}.png"
        caminho_print = os.path.join(caminho_base, nome_arquivo)

        page.screenshot(path=caminho_print, full_page=True)

        print("--- TESTE CONCLUÍDO ---")
        print(f"✍️ Digitado com sucesso: '{texto_para_digitar}'")
        print(f"📸 Print salvo em: {nome_arquivo}")

        browser.close()

if __name__ == "__main__":
    rodar_teste()