import { ComponenteNeto } from "./ComponenteNeto";

import { Id } from "./Id";
import { useContext } from "react";

export function ComponenteFilho() {

    const numero = useContext(Id);
    let id = numero + 1;
    return (
        <>
            <img
                src={"http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"}
                alt="Pokemon"
                width={200}
            />
            <ComponenteNeto />
        </>
    );
}