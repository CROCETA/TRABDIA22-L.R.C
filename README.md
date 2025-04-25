
# Introdução

Este projeto é uma conversão de um site html para um aplicativo React utilizando Vite. O que tivemos que fazer foi aplicar os conceitos de componentizaçao, reaproveitamento do código do nosso antigo trabalho e melhor organização da estrutura do projeto.

A principal melhoria com o uso do React.js é a facilidade na manutenção do código, reutilização de componentes e melhor desempenho, que oferece um lugar de desenvolvimento mais rápido, simples e tambem mais moderno.

---

#Passo a Passo da Conversão

 1. Inicialização do Projeto React

Para iniciar o projeto com Vite e React, foram utilizados os seguintes comandos:

```
npm create vite@latest loja-react --template react
cd loja-react
npm install
npm run dev
```
2. Estrutura de Componentes Criados
A estrutura foi separada da seguinte forma para melhor organização e reuso:
Header: contém o logotipo e navegação.
Banner: imagem principal de destaque da loja.
ProductList: renderiza uma lista dinâmica de produtos.
Footer: rodapé com informações da loja.
Cada componente está dentro da pasta src/components, e todos foram criados com JSX.

3. Estilização
A estilização foi feita com CSS e organizada em arquivos .css separados para cada componente, garantindo facil acesso e melhor manutenção e correçao de erros.

Responsividade foi feita utilizando o comando media pra o site ficar compativel com aparelhos moveis, celulares e tablets.

4. Lista de Produtos
A lista de produtos foi criada de forma dinâmica. Os dados estão armazenados em um array local dentro do componente ProductList.jsx.


