import { MeusDadosOne } from "./components/atividade00/01MeusDados/01MeusDados";
import { MeusDados} from "./components/atividade00/02MeusDados/02MeusDados";
import { Temperatura } from "./components/atividade00/03Temperatura/03Temperatura";

import { GlobalStyle } from "./global";


function App() {
  return (
    <>
      <GlobalStyle/>
      <div>
        <h1 >Atividade 00</h1>

        <h1>Questão 01:</h1>
        <MeusDadosOne/>  
        
        <h1>Questão 02:</h1>
        <MeusDados 
          nome={"Emanuel de Araújo Lemos"}
          curso={"Engenharia de Software"}
          universidade={"Universidade Federal do Ceará"}
        />
        <MeusDados 
          nome={"Caio Rian Reinaldo de Sousa"}
          curso={"Engenharia de Software"}
          universidade={"Universidade Federal do Ceará"}
        />
        
        <h1>Questão 03:</h1>
        <Temperatura temperatura={25} />
      </div>
    </>
  );
}

export default App;
