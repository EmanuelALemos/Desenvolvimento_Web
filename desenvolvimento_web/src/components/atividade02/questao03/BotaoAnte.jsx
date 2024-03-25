import { Id } from "./Id";
import { useContext } from "react";

export function BotaoAnte() {

    const { id, setId } = useContext(Id);

    function decrementar() {
        if(id - 1 < 1) return;
        setId(id => id - 1);
    }

    return (
        <button
            style={{
                backgroundColor: "#010B13",
                color: "white",
                padding: "10px",
                margin: "10px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem"
            
            }} 
            onClick={() => decrementar()}
        >
            Pokemon Anterior
        </button>
    );
}