import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--background);
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;
export const Cima = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 728px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px 0px rgba(1, 1, 1, 1);
  padding: 2rem;
  border-radius: 0.5rem;

  span {
    margin: 0.5rem 0;
  }

  input {
    background: transparent;
    border: 1px solid var(--branco);
    border-radius: 0.2rem;
    padding: 0.5rem;
    color: var(--branco);
  }
`;
