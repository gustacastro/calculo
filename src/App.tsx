import React, { useEffect, useState } from "react";

import { Container, Cima, Caixa } from "./styles";

function App() {
  const [oddsTime01, setOddsTime01] = useState("");
  const [apostaTime01, setApostaTime01] = useState("");
  const [ganhoTime01, setGanhoTime01] = useState("");
  const [oddsTime02, setOddsTime02] = useState("");
  const [apostaTime02, setApostaTime02] = useState("");
  const [ganhoTime02, setGanhoTime02] = useState("");
  const [novaOdds3, setNovaOdds3] = useState("");
  const [apostaTime03, setApostaTime03] = useState("");
  const [ganhoTime03, setGanhoTime03] = useState("");

  useEffect(() => {
    const resultado = parseFloat(apostaTime01) * parseFloat(oddsTime01);
    const resultadoReal = resultado - parseFloat(apostaTime01);
    const oddsRetorno = resultado / resultadoReal;
    const resultadoTime2 = resultadoReal * oddsRetorno;
    setGanhoTime01(resultado.toFixed(2).toString());
    setApostaTime02(resultadoReal.toFixed(2).toString());
    setOddsTime02(oddsRetorno.toFixed(2).toString());
    setGanhoTime02(resultadoTime2.toFixed(2).toString());
  }, [oddsTime01, apostaTime01]);

  useEffect(() => {
    const valorNovaAposta = (
      (Number(apostaTime01) * Number(oddsTime01)) /
      Number(novaOdds3)
    ).toFixed(2);

    setApostaTime03(valorNovaAposta.toString());
    setGanhoTime03(
      (Number(apostaTime03) * Number(novaOdds3)).toFixed(2).toString()
    );
  }, [novaOdds3, ganhoTime03, apostaTime03]);

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
            Aposta <h3>{apostaTime01 ? apostaTime01 : "0"}</h3>
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
            Aposta <h3>{apostaTime02}</h3>
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
        <Caixa>
          <h3>Calcular</h3>
          <span>Odds para calculo</span>
          <input
            type="number"
            value={novaOdds3}
            onChange={(e) => setNovaOdds3(e.target.value)}
          />
          <span>Aposta para recuperar</span>
          <input type="number" disabled value={apostaTime03} />
          <span>
            Aposta <h3>{apostaTime03}</h3>
          </span>
          <span>
            Ganho
            <h3>
              {novaOdds3 && apostaTime03
                ? (Number(ganhoTime03) - Number(apostaTime03)).toFixed(2)
                : "0"}
            </h3>
          </span>
          <span>
            Ganho Total
            <h3>{novaOdds3 && apostaTime03 ? ganhoTime03 : "0"}</h3>
          </span>
        </Caixa>
      </Cima>
    </Container>
  );
}

export default App;
