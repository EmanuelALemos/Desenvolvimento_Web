import { Container } from './FilhoStyles';

export function Filho({altura, peso}) {
    
    function calcularIMC(){
        return peso / (altura * altura);
    }

    function messageIMC(){
        const imc =calcularIMC();
        if (imc < 18) {
            return <h3>Abaixo do peso</h3>
        }else if (imc > 25) {
            return <h3>Acima do peso</h3>
        }else {
            return <h3>Peso normal</h3>
        }
    }
    
    return(
        <Container altura = {altura} peso = {peso}>
            {messageIMC()}
        </Container>
    );
}