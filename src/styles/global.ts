import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #171717;

    --vermelho: #dc2626;
    --verde: #16a34a;
    --laranja: #ea580c;
    --azul: #2563eb;
    --rosa: #db2777;
    --roxo: #9333ea;
    --amarelo: #eab308;
    --preto: #0a0a0a;
    --branco: #f5f5f5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 728px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    color: var(--branco);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Comfortaa', cursive;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    color: var(--branco);
    cursor: pointer;
    transition: all .2s ease-in;

    &:hover {
      filter: brightness(0.8);
    }
  }

`;
