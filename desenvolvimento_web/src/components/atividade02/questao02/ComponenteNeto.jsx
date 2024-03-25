import { Id } from "./Id";
import { useContext } from "react";

export function ComponenteNeto() {
    
    const numero = useContext(Id);

    let id = numero + 2;

    return (
        <>
            <img
                alt="Pokemon"
                src={"http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"}
                width={200}
            />
        </>
    );
}