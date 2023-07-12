import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: var(--background);
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;

  button {
    background-color: var(--background);
    border: 1px solid var(--branco);
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;

    margin: 1rem;
  }
`;
export const Cima = styled.div`
  display: flex;
  gap: 2rem;
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
