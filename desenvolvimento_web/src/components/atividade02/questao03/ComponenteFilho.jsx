import { ComponenteNeto } from "./ComponenteNeto";

import { Id } from "./Id";
import { useContext } from "react";

export function ComponenteFilho() {

    const { id } = useContext(Id);
    let num = id + 1;
    return (
        <>
            <img
                src={"http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + num + ".png"}
                alt="Pokemon"
                width={200}
            />
            <ComponenteNeto />
        </>
    );
}