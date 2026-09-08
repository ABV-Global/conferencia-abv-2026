# CONFERÊNCIA ABV 2026

Da confissão à obediência · A cultura da unidade.

20 de setembro de 2026, às 14h (Londres). Abundante Vida Londres, 100 Hanger Lane, London W5 1EZ.

## Página

https://abv-global.github.io/conferencia-abv-2026/

Página estática, sem dependências de instalação. O cartaz e o emblema foram extraídos sem alteração do HTML fornecido pela igreja. A interface usa a paleta oficial, Old London e Roboto alojadas localmente. Rigid Square aguarda o ficheiro webfont licenciado; a referência usa Roboto como alternativa explícita. As cores já incorporadas no cartaz original foram preservadas.

## Inscrições

O botão abre o aplicativo de e-mail do visitante com destinatário `abundantevidalondon@gmail.com`, assunto da conferência e mensagem pronta para completar com o nome. O visitante deve enviar a mensagem; a equipa da igreja recebe e confirma a inscrição por e-mail. A página explica estas etapas e mostra o endereço para envio manual ou dúvidas. Funciona sem JavaScript. Não existe envio automático no servidor, recolha de dados na página ou confirmação fictícia de vaga. Não guardar dados pessoais neste repositório.

## Desenvolvimento e publicação

Node.js 22 ou superior. `npm run check` verifica a sintaxe. `npm run build` valida recursos e âncoras e prepara `dist/`. `npm run dev` serve a versão preparada em http://127.0.0.1:4173/.

O workflow GitHub Pages publica apenas os ficheiros de `dist/` após alterações em `main`. A configuração de Pages deve usar GitHub Actions.

## Ajustes ainda dependentes da igreja

- Webfont licenciado de Rigid Square para a referência bíblica.
- Nome de quem ministra e duração, se a organização desejar divulgar esses detalhes. Nenhum nome ou duração foi inventado.
