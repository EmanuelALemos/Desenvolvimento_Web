import { Cores } from "./Cores";
import { useContext } from "react";


export function ComponenteB() {

    const { bkgB } = useContext(Cores);

    return (
        <div>
            <h1 style={{backgroundColor: bkgB}} >
                Contexto B
            </h1>
        </div>
    )
}