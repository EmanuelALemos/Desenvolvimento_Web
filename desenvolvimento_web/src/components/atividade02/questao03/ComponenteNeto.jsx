import { Id } from "./Id";
import { useContext } from "react";

export function ComponenteNeto() {

    const { id } = useContext(Id);

    let num = id + 2;

    return (
        <>
            <img
                alt="Pokemon"
                src={"http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + num + ".png"}
                width={200}
            />
        </>
    );
}