import { MeusDadosOne } from "./components/atividade00/01MeusDados/01MeusDados";
import { MeusDados } from "./components/atividade00/02MeusDados/02MeusDados";
import { Temperatura } from "./components/atividade00/03Temperatura/03Temperatura";
import { Pai } from "./components/atividade01/questao01/01Pai";
import * as PC from "./components/atividade01/02MeuPc";
import { Arena, World } from "./components/atividade01/03Batalha";

import { GlobalStyle } from "./global";

import { ComponenteA } from "./components/atividade02/questao01/ComponenteA";
import { ComponenteAvo } from "./components/atividade02/questao03/ComponenteAvo";

function App() {
  return (
    <>
      <GlobalStyle />
      <div >
        <ComponenteAvo />
      </div>
    </>
  );
}

export default App;
