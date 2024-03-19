import { MeusDadosOne } from "./components/atividade00/01MeusDados/01MeusDados";
import { MeusDados} from "./components/atividade00/02MeusDados/02MeusDados";
import { Temperatura } from "./components/atividade00/03Temperatura/03Temperatura";
import { Pai } from "./components/atividade01/questao01/01Pai";
import * as PC  from "./components/atividade01/02MeuPc";
import { Arena, World } from "./components/atividade01/03Batalha";

import { GlobalStyle } from "./global";



function App() {
  return (
    <>
      <GlobalStyle/>
      <div>
        <Pai/>
        <hr width = '90%'/>
        <PC.PlacaMae nome="Asus" preco="R$ 1.000,00"/>
        <PC.Memoria nome="Kingston" preco="R$ 500,00"/>
        <PC.PlacaDeVideo nome="Nvidia" preco="R$ 2.000,00"/>
        <hr width = '90%'/>
        <World>
          <Arena/>
          
          <Arena/>

          <Arena/>
        </World>
      </div>
    </>
  );
}

export default App;
