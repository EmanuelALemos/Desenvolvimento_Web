const PlacaMae = ({nome, preco}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    );
}


const Memoria = ({nome, preco}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    );
}

const PlacaDeVideo = ({nome, preco}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {preco}</h3>
        </div>
    );
}


export { PlacaMae, Memoria, PlacaDeVideo };