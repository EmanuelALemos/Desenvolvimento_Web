import { Cores } from "./Cores";
import { useContext } from "react";


export function ComponenteD() {
    const { bkgD } = useContext(Cores);
    
    return (
        <div>
            <h1 style={{backgroundColor: bkgD}}>
                Contexto D
            </h1>
        </div>
    );
}