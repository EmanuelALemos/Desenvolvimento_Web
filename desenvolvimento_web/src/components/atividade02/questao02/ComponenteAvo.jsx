import { ComponenteFilho } from "./ComponenteFilho";
import { Id } from "./Id";
import { useContext } from "react";


export function ComponenteAvo() {
    
    const numero = useContext(Id);
    
    return (
        <>
            <Id.Provider value = {numero}>
                <img
                    src={"http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + numero + ".png"}
                    alt="Pokemon"
                    width={200}
                />
                <ComponenteFilho />
            </Id.Provider>
        </>
    );
}