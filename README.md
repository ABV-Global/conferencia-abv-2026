# CONFERÊNCIA ABV 2026

Da confissão à obediência · A cultura da unidade.

20 de setembro de 2026, às 14h (Londres). Abundante Vida Londres, 100 Hanger Lane, London W5 1EZ.

## Página

https://abv-global.github.io/conferencia-abv-2026/

Página estática, sem dependências de instalação. Usa os ficheiros fornecidos LOGO 2.png e Arte Hero site.png, sem alterar as imagens. A interface usa a paleta oficial, Old London e Roboto alojadas localmente. Rigid Square aguarda o ficheiro webfont licenciado; a referência usa Roboto como alternativa explícita.

## Inscrições

O formulário solicita nome completo e telefone/WhatsApp e prepara localmente a mensagem para `abundantevidalondon@gmail.com`. O visitante deve enviá-la no aplicativo de e-mail; a equipa da igreja recebe e confirma a inscrição. A contribuição é de £5 por participante para os custos da conferência; o e-mail pede orientações de pagamento. A página não processa pagamentos nem afirma que uma vaga foi confirmada. Sem JavaScript, o endereço de e-mail continua disponível para inscrição manual. Os dados não são guardados no navegador nem enviados ao GitHub. Não guardar dados pessoais neste repositório.

## Desenvolvimento e publicação

Node.js 22 ou superior. `npm run check` verifica a sintaxe. `npm run build` valida recursos e âncoras e prepara `dist/`. `npm run dev` serve a versão preparada em http://127.0.0.1:4173/.

O workflow GitHub Pages publica apenas os ficheiros de `dist/` após alterações em `main`. A configuração de Pages deve usar GitHub Actions.

## Ajustes ainda dependentes da igreja

- Webfont licenciado de Rigid Square para a referência bíblica.
- Nome de quem ministra e duração, se a organização desejar divulgar esses detalhes. Nenhum nome ou duração foi inventado.
