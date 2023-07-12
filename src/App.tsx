import React, { useState } from "react";

import { Container, Cima, Caixa } from "./styles";

function App() {
  const [oddsTime01, setOddsTime01] = useState("");
  const [apostaTime01, setApostaTime01] = useState("");
  const [ganhoTime01, setGanhoTime01] = useState("");
  const [oddsTime02, setOddsTime02] = useState("");
  const [apostaTime02, setApostaTime02] = useState("");
  const [ganhoTime02, setGanhoTime02] = useState("");

  function handleGanhoTime01() {
    const resultado = parseFloat(apostaTime01) * parseFloat(oddsTime01);
    const resultadoReal = resultado - parseFloat(apostaTime01);
    const oddsRetorno = resultado / resultadoReal;
    const resultadoTime2 = resultadoReal * oddsRetorno;
    setGanhoTime01(resultado.toFixed(2).toString());
    setApostaTime02(resultadoReal.toFixed(2).toString());
    setOddsTime02(oddsRetorno.toFixed(2).toString());
    setGanhoTime02(resultadoTime2.toFixed(2).toString());
  }

  return (
    <Container>
      <Cima>
        <Caixa>
          <h3>Time 01</h3>
          <span>Odds</span>
          <input
            type="number"
            value={oddsTime01}
            onChange={(e) => setOddsTime01(e.target.value)}
          />
          <span>Aposta</span>
          <input
            type="number"
            value={apostaTime01}
            onChange={(e) => setApostaTime01(e.target.value)}
          />
          <span>Ganho: {ganhoTime01}</span>
        </Caixa>
        <Caixa>
          <h3>Time 02</h3>
          <span>Odds para recuperar</span>
          <input type="number" disabled value={oddsTime02} />
          <span>Aposta para recuperar</span>
          <input type="number" disabled value={apostaTime02} />
          <span>Ganho: {ganhoTime02}</span>
        </Caixa>
      </Cima>
      <button onClick={handleGanhoTime01}>Calcular</button>
    </Container>
  );
}

export default App;
