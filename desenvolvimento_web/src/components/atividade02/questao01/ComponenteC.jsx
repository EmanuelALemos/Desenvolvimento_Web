import { ComponenteD } from "./ComponenteD";
import { Cores } from "./Cores";
import { useContext } from "react";

export function ComponenteC() {
    const { bkgC } = useContext(Cores);

    return (
        <div>
            <h1 style={{backgroundColor: bkgC}}>
                Contexto C
            </h1>
            <ComponenteD />
        </div>
    );
}