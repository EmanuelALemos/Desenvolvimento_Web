import { Container, Text } from "./styles";


export const MeusDados = ({nome, curso, universidade}) => {
    return(
        <Container>
            <Text>Nome: {nome}</Text>
            <Text>Curso: {curso}</Text>
            <Text>Universidade: {universidade}</Text>
        </Container>    
    );
}