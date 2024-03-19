import { Filho } from './01Filho';
import { Container } from './PaiStyles';


export function Pai() {
    return(
        <Container>
            <Filho altura={1.70} peso={70}/>
            <Filho altura={1.80} peso={160}/>
            <Filho altura={1.90} peso={60}/>
        </Container>
    );
}