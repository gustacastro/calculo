import React, { useEffect, useState } from "react";

import { Container, Cima, Caixa } from "./styles";

function App() {
  const [oddsTime01, setOddsTime01] = useState("");
  const [apostaTime01, setApostaTime01] = useState("");
  const [ganhoTime01, setGanhoTime01] = useState("");
  const [oddsTime02, setOddsTime02] = useState("");
  const [apostaTime02, setApostaTime02] = useState("");
  const [ganhoTime02, setGanhoTime02] = useState("");

  useEffect(() => {
    const resultado = parseFloat(apostaTime01) * parseFloat(oddsTime01);
    const resultadoReal = resultado - parseFloat(apostaTime01);
    const oddsRetorno = resultado / resultadoReal;
    const resultadoTime2 = resultadoReal * oddsRetorno;

    if (resultadoReal) {
      setApostaTime02(resultadoReal.toFixed(2).toString());
      setGanhoTime02(resultadoTime2.toFixed(2).toString());
      setOddsTime02(oddsRetorno.toFixed(2).toString());
    }

    setGanhoTime01(resultado.toFixed(2).toString());
  }, [oddsTime01, apostaTime01]);

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
          <span>
            Aposta <h3>{apostaTime01 || "0"}</h3>
          </span>
          <span>
            Ganho
            <h3>
              {oddsTime01 && apostaTime01
                ? (Number(ganhoTime01) - Number(apostaTime01)).toFixed(2)
                : "0"}
            </h3>
          </span>
          <span>
            Ganho Total
            <h3>{oddsTime01 && apostaTime01 ? ganhoTime01 : "0"}</h3>
          </span>
        </Caixa>

        <Caixa>
          <h3>Time 02</h3>
          <span>Odds para recuperar</span>
          <input type="number" disabled value={oddsTime02} />
          <span>Aposta para recuperar</span>
          <input type="number" disabled value={apostaTime02} />
          <span>
            Aposta <h3>{apostaTime02 || "0"}</h3>
          </span>
          <span>
            Ganho
            <h3>
              {oddsTime02 && apostaTime02
                ? (Number(ganhoTime02) - Number(apostaTime02)).toFixed(2)
                : "0"}
            </h3>
          </span>
          <span>
            Ganho Total
            <h3>{oddsTime01 && apostaTime02 ? ganhoTime02 : "0"}</h3>
          </span>
        </Caixa>
      </Cima>
    </Container>
  );
}

export default App;
